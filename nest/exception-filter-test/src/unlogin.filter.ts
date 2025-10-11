import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

export class UnLoginExcepytion {
  message: string;

  constructor(message) {
    this.message = message;
  }
}

@Catch(UnLoginExcepytion)
export class UnloginFilter implements ExceptionFilter {
  catch(exception: UnLoginExcepytion, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    response.status(401).json({
      code: 401,
      message: exception.message,
      data: '用户未登录'
    });
  }
}
