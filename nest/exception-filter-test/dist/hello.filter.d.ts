import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class HelloFilter implements ExceptionFilter {
    private readonly appService;
    catch(exception: HttpException, host: ArgumentsHost): void;
}
