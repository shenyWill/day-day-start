import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    debugger;
    return 'Hello World!';
  }
}
