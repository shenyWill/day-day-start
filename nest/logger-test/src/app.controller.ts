import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MyLogger } from './logger';

@Controller()
export class AppController {
  private logger = new Logger();
  constructor(private readonly appService: AppService) {}

  @Inject(MyLogger)
  private readonly logger1: MyLogger;

  @Get()
  getHello(): string {
    this.logger1.log('xxxx', AppController.name);
    this.logger.debug('aaa', AppController.name + 1);
    this.logger.error('bbb', AppController.name);
    this.logger.log('ccc', AppController.name);
    this.logger.verbose('ddd', AppController.name);
    this.logger.warn('eee', AppController.name);
    return this.appService.getHello();
  }
}
