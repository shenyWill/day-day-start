import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(context.getClass().name, context.getHandler().name);
    const start = Date.now();
    return next.handle().pipe(
      tap(() => {
        console.log('time:', Date.now() - start);
      }),
    );
  }
}
