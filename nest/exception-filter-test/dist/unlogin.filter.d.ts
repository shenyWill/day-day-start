import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class UnLoginExcepytion {
    message: string;
    constructor(message: any);
}
export declare class UnloginFilter implements ExceptionFilter {
    catch(exception: UnLoginExcepytion, host: ArgumentsHost): void;
}
