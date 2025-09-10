import { Controller, Get, Next } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('hello1')
  getHello1(): string {
    return 'hello1';
  }

  @Get('hello2')
  getHello2(): string {
    return 'hello2';
  }

  @Get('world1')
  getWorld1(): string {
    return 'world1';
  }

  @Get('world2')
  getWorld2(@Next() next: () => void): string {
    next();
    return 'world2';
  }

  @Get('world2')
  getHello3(): string {
    return 'world22';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
}
