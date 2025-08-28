import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PersonException } from './person.exception';

@Catch(PersonException)
export class TestFilter<T extends PersonException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    console.log('exception', exception.name, exception.age);
    console.log(host);
    const type = host.getType();
    if (type === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      response.status(400).json({
        message: '这是一个自定义异常',
        name: exception.name,
        age: exception.age,
      });
    }
  }
}
