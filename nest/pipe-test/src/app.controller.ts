import { Controller, Get, HttpStatus, Param, ParseArrayPipe, ParseEnumPipe, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TestPipe } from './test.pipe';

enum School {
  SCOT = 'scot',
  TONG = 'tong',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/pipe')
  getPipe(@Query('name', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) name: string) {
    return name + 1;
  }

  @Get('/pipe-validate')
  getPipeValidate(@Query('name', new ParseArrayPipe({ items: Number, separator: 't' })) name: number[]) {
    return name.map(item => item + 1);
  }

  @Get('/pipe-validate-school')
  getPipeValidateSchool(@Query('name', new ParseEnumPipe(School)) name: School) {
    return name;
  }

  @Get('/pipe-custome/:school')
  getPipeCustome(@Query('name', new TestPipe()) name: string, @Param('school', new TestPipe()) school: number) {
    return {
      name,
      school,
    };
  }
}
