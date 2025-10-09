import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TestInterceptor } from './test.interceptor';
import { MapTestInterceptor } from './map-test.interceptor';
import { TapTestInterceptor } from './tap-test.interceptor';
import { CatchErrorTestInterceptor } from './catch-error-test.interceptor';
import { TimeoutTestInterceptor } from './timeout-test.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(TestInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/map')
  @UseInterceptors(MapTestInterceptor)
  getHelloMap(): string {
    return 'test map interceptor';
  }

  @Get('/tap')
  @UseInterceptors(TapTestInterceptor)
  getHelloTap(): string {
    return 'test tap interceptor';
  }

  @Get('/catch')
  @UseInterceptors(CatchErrorTestInterceptor)
  getHelloCatch(): string {
    throw new Error('test catch error interceptor');
    return 'test catch error interceptor';
  }

  @Get('/timeout')
  @UseInterceptors(TimeoutTestInterceptor)
  async getHelloTimeout(): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 4000));
    return 'test timeout interceptor';
  }
}
