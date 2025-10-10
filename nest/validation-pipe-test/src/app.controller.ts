import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { TestValidDto } from './dto/test.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('test-valid')
  testValid(@Body(new ValidationPipe()) body: TestValidDto) {
    console.log(111, body);
    return body;
  }
}
