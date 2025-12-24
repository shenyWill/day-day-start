// llm.ts - 核心逻辑
import { Controller, Get } from '@gulux/gulux/application-http';
import { ChatMistralAI } from '@langchain/mistralai';
import { HumanMessage } from '@langchain/core/messages';

@Controller()
export default class LLMController {
  private model: ChatMistralAI;

  constructor() {
    // 初始化Mistral AI模型
    this.model = new ChatMistralAI({
      model: 'mistral-medium-2508',
      temperature: 0, // 确保输出的确定性
      apiKey: 'Pjp81beTTReesDjdQwuG87kUOkwtRreS'
    });
  }

  @Get('/getLLM')
  public async run() {
    // 构建用户消息
    const messages = [new HumanMessage({ content: '成都今天天气怎么样？' })];
    
    // 直接调用LLM，无外部数据源
    const result = await this.model.invoke(messages);
    return result;
  }
}
