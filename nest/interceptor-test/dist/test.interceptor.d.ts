import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
export declare class TestInterceptor implements NestInterceptor {
    private readonly appService;
    constructor(appService: AppService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
