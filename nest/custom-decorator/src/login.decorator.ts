import { SetMetadata } from '@nestjs/common';

export const Login = (...args: string[]) => SetMetadata('login', args);
