import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello1(): string;
    getHello2(): string;
    getWorld1(): string;
    getWorld2(next: () => void): string;
    getHello3(): string;
    getHello(): string;
}
