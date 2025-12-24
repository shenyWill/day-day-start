import { Controller, Post, Body } from '@gulux/gulux/application-http'; // HTTP控制器装饰器
import { ChatMistralAI } from '@langchain/mistralai'; // Mistral AI 聊天模型
import { HumanMessage } from '@langchain/core/messages'; // 消息类型
import { Client } from '@modelcontextprotocol/sdk/client/index.js'; // MCP客户端
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'; // MCP标准输入输出传输

// Mistral AI API密钥
const MISTRAL_API_KEY='Pjp81beTTReesDjdQwuG87kUOkwtRreS'

@Controller()
export default class UserController {
  private model: ChatMistralAI; // Mistral AI 聊天模型实例
  private mcpClient: Client | null = null; // MCP客户端实例

  /**
   * 构造函数 - 初始化 Mistral AI 模型和 MCP 客户端
   */
  constructor() {
    this.model = new ChatMistralAI({
      model: 'mistral-medium-2508', // 使用的模型版本
      temperature: 0, // 设置为0确保输出的确定性
      apiKey: MISTRAL_API_KEY // API密钥
    });
    this.initMcpClient();
  }

  /**
   * 初始化 MCP 客户端
   */
  private async initMcpClient() {
    try {
      const transport = new StdioClientTransport({
        command: 'node',
        args: ['/Users/bytedance/Desktop/study-code/day-day-start/AI/weather-mcp-server/src/index.js'],
        cwd: '/Users/bytedance/Desktop/study-code/day-day-start/AI/weather-mcp-server'
      });
      this.mcpClient = new Client({
        name: 'weather-client',
        version: '1.0.0'
      }, {
        capabilities: {}
      });
      await this.mcpClient.connect(transport);
      console.log('MCP客户端连接成功');
    } catch (error) {
      console.error('MCP客户端连接失败:', error);
      this.mcpClient = null;
    }
  }

  @Post('/getWeather')
  public async run(@Body('question') question: string) {
    // 检查MCP服务器是否可用
    if (!this.mcpClient) {
      return {
        success: false,
        error: 'MCP服务器不可用'
      };
    }

    try {
      // 获取可用的工具列表，这里会检测连接是否有效
      const toolsResponse = await this.mcpClient.listTools();
      const availableTools = toolsResponse.tools;

      if (!availableTools || availableTools.length === 0) {
        return {
          success: false,
          error: '没有可用的MCP工具'
        };
      }

      // 构建工具描述信息
      const toolDescriptions = availableTools.map(tool => 
        `工具名称: ${tool.name}\n描述: ${tool.description}\n输入参数: ${JSON.stringify(tool.inputSchema)}`
      ).join('\n\n');

      // 让LLM分析问题并选择合适的工具
      const analysisMessages = [new HumanMessage({ 
        content: `用户问题: "${question}"

            可用的MCP工具列表:
            ${toolDescriptions}

            请分析用户问题，如果可以使用上述工具之一来解决，请返回JSON格式的响应:
            {
            "canHandle": true,
            "toolName": "工具名称",
            "arguments": {"参数名": "参数值"}
            }

            如果无法处理，请返回:
            {
            "canHandle": false,
            "reason": "无法处理的原因"
            }
            严格按照JSON格式返回，不要添加任何其他内容。` 
      })];
      
      const analysisResult = await this.model.invoke(analysisMessages);
      const analysisContent = analysisResult.content.toString().trim();
      
      let analysisJson;
       try {
         // 尝试提取JSON内容（可能被markdown代码块包装）
         let jsonContent = analysisContent;
         if (analysisContent.includes('```json')) {
           const jsonMatch = analysisContent.match(/```json\s*([\s\S]*?)\s*```/);
           if (jsonMatch) {
             jsonContent = jsonMatch[1].trim();
           }
         } else if (analysisContent.includes('```')) {
           const codeMatch = analysisContent.match(/```\s*([\s\S]*?)\s*```/);
           if (codeMatch) {
             jsonContent = codeMatch[1].trim();
           }
         }
         
         analysisJson = JSON.parse(jsonContent);
       } catch (parseError) {
         return {
           success: false,
           error: 'LLM返回的分析结果格式错误',
           rawResponse: analysisContent,
           parseError: parseError instanceof Error ? parseError.message : String(parseError)
         };
       }

      if (!analysisJson.canHandle) {
        return {
          success: false,
          error: analysisJson.reason || '无法处理该请求'
        };
      }

      // 调用选定的MCP工具
      const toolResult = await this.mcpClient.callTool({
        name: analysisJson.toolName,
        arguments: analysisJson.arguments
      });
      
      return {
        success: true,
        question: question,
        selectedTool: analysisJson.toolName,
        toolArguments: analysisJson.arguments,
        result: (toolResult as any).content[0].text,
        method: `MCP Server - ${analysisJson.toolName}`,
        server: 'weather-mcp-server'
      };
      
    } catch (error) {
      console.error('处理请求失败:', error);
      
      // 如果是连接相关的错误，重置MCP客户端
      if (error instanceof Error && 
          (error.message.includes('ECONNREFUSED') || 
           error.message.includes('EPIPE') || 
           error.message.includes('connection') ||
           error.message.includes('Transport'))) {
        console.log('检测到MCP连接断开，重置客户端');
        this.mcpClient = null;
        return {
          success: false,
          error: 'MCP服务器连接已断开',
          details: error.message
        };
      }
      
      return {
        success: false,
        error: '处理请求时发生错误',
        details: error instanceof Error ? error.message : String(error)
      };
    }
  }
}
