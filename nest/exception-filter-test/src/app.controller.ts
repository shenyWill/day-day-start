import { BadGatewayException, BadRequestException, Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Man } from './dto/man.dto';
import { UnLoginExcepytion } from './unlogin.filter';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);
    throw new UnLoginExcepytion('用户未登录1'); 
    // throw new BadRequestException('Forbidden');
    return this.appService.getHello();
  }

  @Post('man')
  postMan(@Body() body: Man) {
    console.log(body);
    return body;
  }
}
