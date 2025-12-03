import { ConsoleLogger } from "@nestjs/common";
export declare class MyLogger3 extends ConsoleLogger {
    private readonly appService;
    log(message: string, context: string): void;
}
