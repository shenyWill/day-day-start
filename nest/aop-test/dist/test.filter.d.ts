import { ArgumentsHost, BadRequestException, ExceptionFilter } from '@nestjs/common';
export declare class TestFilter<T> implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost): void;
}
