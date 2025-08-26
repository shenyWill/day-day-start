import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from '@nestjs/common';

@Catch(BadRequestException)
export class TestFilter<T> implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    response.status(400).json({
      code: 400,
      message: 'test: ' + exception.message,
    })
  }
}
