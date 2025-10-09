import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getHelloMap(): string;
    getHelloTap(): string;
    getHelloCatch(): string;
    getHelloTimeout(): Promise<string>;
}
