// weather-mcp-server/src/index.js
import { z } from 'zod';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { getCurrentWeather } from './tools.js';

// 创建 MCP 服务器
const server = new McpServer({
  name: 'weather-mcp-server',
  version: '1.0.0',
  description: '这是一个天气的 MCP 服务器，可以查询当天的天气',
});

server.registerTool(
  'get_current_weather', // 工具名称
  {
    title: '获取当天天气', // 工具标题
    description: '获取指定城市的当天天气信息，返回的信息包括温度、天气描述、湿度、风速。如果输入的城市是中文，那需要转化为对应的英文后再查询。', // 工具描述, 因为方法接受的是城市的英文，需要告诉大模型必要时进行转换
    inputSchema: { city: z.string() }, // 输入参数模式
  },
  getCurrentWeather
);

// 启动服务器（使用标准输入输出作为传输方式）
const transport = new StdioServerTransport();
await server.connect(transport);
