// function_calling.ts
import { z } from 'zod'; // 用于数据验证和类型定义
import { Controller, Get } from '@gulux/gulux/application-http'; // HTTP控制器装饰器
import { ChatMistralAI } from '@langchain/mistralai'; // Mistral AI 聊天模型
import { AIMessageChunk, HumanMessage, ToolMessage } from '@langchain/core/messages'; // 消息类型
import { tool } from '@langchain/core/tools'; // 工具定义
import { getCurrentWeather } from '../utils/weatherTool'; // 天气查询工具函数

// 定义天气查询工具
const weatherTool = tool(getCurrentWeather, {
  name: 'weather_tool', // 工具名称
  description: 'Search city weather', // 工具描述，帮助AI理解工具用途
  schema: z.object({
    city: z.string().describe('the city name, support beijing(target city name)、chengdu'), // 参数验证模式
  }),
});

@Controller()
export default class UserController {
  private model: ChatMistralAI;
  constructor() {
    this.model = new ChatMistralAI({
      model: 'mistral-medium-2508',
      temperature: 0,
      apiKey: 'Pjp81beTTReesDjdQwuG87kUOkwtRreS'
    });
  }
 
  @Get('/getFunctionCalling')
  public async run() {
    // 将工具绑定到模型，使模型能够调用这些工具
    const modelWithTools = this.model.bindTools([weatherTool]);
    
    const messages: any = [new HumanMessage('成都今天天气怎么样？')];
    // 第一次调用：让AI分析问题并决定是否需要使用工具
    const toolCallAIMessage: AIMessageChunk = await modelWithTools.invoke(messages);
    messages.push(toolCallAIMessage as any); // 将AI的响应添加到消息历史

    // 检查AI是否决定调用工具
    if (toolCallAIMessage?.tool_calls && toolCallAIMessage?.tool_calls?.length > 0) {
      // 遍历所有工具调用请求
      for (const toolCall of toolCallAIMessage.tool_calls) {
        // 检查是否是天气查询工具
        if (toolCall.name === 'weather_tool') {
          // 执行天气查询工具，传入AI提取的参数
          const toolResult = await weatherTool.invoke(toolCall.args as { city: string });
          console.log('工具执行结果:', toolResult);
          
          // 将工具执行结果包装成ToolMessage并添加到消息历史
          // 这样AI就能看到工具的执行结果
          messages.push(
            new ToolMessage({
              content: JSON.stringify(toolResult), // 将结果序列化为JSON字符串
              tool_call_id: toolCall.id || 'weather_tool_call', // 关联工具调用ID
            })
          );
        }
      }

      console.log(2, messages);

      // 第二次调用：基于工具执行结果，让AI生成最终的自然语言回答
      const finalResponse = await modelWithTools.invoke(messages);
      
      // 返回包含AI回答和工具调用结果的完整响应
      return {
        success: true,
        message: finalResponse.content, // AI基于工具结果生成的最终回答
        toolResults: messages
          .filter((msg: any) => msg._getType() === 'tool') // 筛选出所有工具消息
          .map((msg: any) => {
            try {
              // 尝试解析JSON格式的工具结果
              return JSON.parse(msg.content as string);
            } catch {
              // 如果解析失败，直接返回原始内容
              return msg.content;
            }
          }),
      };
    }

    // 如果AI判断不需要调用工具，直接返回AI的回答
    return {
      success: true,
      message: toolCallAIMessage.content, // AI的直接回答
      toolResults: [], // 没有工具调用结果
    };
  }
}