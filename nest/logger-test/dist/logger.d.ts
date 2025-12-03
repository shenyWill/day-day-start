import { LoggerService } from "@nestjs/common";
export declare class MyLogger implements LoggerService {
    log(message: string, context: string): void;
    error(message: string, context: string): void;
    warn(message: string, context: string): void;
}
