import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Catch(HttpException)
export class HelloFilter implements ExceptionFilter {
  
  @Inject(AppService)
  private readonly appService: AppService;

  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse();

    const res = exception.getResponse();

    const status = exception.getStatus();
    response.status(status).json({
      code: status,
      message: res['message'] ? res['message']?.join(',') : exception.message,
      name: 'yuanwill',
      service: this.appService.getHello(),
    });
  }
}
