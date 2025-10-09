import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class TapTestInterceptor implements NestInterceptor {
  constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(TapTestInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.appService.getHello();

    this.logger.log('tap test interceptor');

    return next.handle();
  }
}
