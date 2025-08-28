import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { PersonException } from './person.exception';
export declare class TestFilter<T extends PersonException> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
