import { ConsoleLogger, Inject, Injectable } from "@nestjs/common";
import { AppService } from "./app.service";

@Injectable()
export class MyLogger3 extends ConsoleLogger {
    @Inject(AppService)
    private readonly appService: AppService;
   
    log(message: string, context: string) {
        console.log(`----log3----[${context}]---${this.appService.getHello()}`,message)
    }
}