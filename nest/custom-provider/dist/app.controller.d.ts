import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private readonly personService;
    private readonly schoolService;
    private readonly infoService;
    getHello(): string;
}
