import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements NestInterceptor {
  @Inject(Reflector)
  private readonly reflector: Reflector;
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const classMetaData = this.reflector.get('roles', context.getClass());
    const methodMetaData = this.reflector.get('roles', context.getHandler());
    console.log(classMetaData, methodMetaData);
    return next.handle();
  }
}
