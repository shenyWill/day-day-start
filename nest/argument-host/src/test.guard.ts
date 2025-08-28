import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './role';

@Injectable()
export class TestGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requireRoles = this.reflector.get<Role[]>('roles', context.getHandler());
    const { user, query } = context.switchToHttp().getRequest();
    if (!requireRoles) {
      return true;
    }
    return requireRoles.some((role) => user && user.role === role);
  }
}
