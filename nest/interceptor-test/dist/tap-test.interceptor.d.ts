import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
export declare class TapTestInterceptor implements NestInterceptor {
    private readonly appService;
    constructor(appService: AppService);
    private readonly logger;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
