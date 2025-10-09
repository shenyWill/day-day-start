import { AppService } from './app.service';
declare enum School {
    SCOT = "scot",
    TONG = "tong"
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getPipe(name: string): string;
    getPipeValidate(name: number[]): number[];
    getPipeValidateSchool(name: School): School;
    getPipeCustome(name: string, school: number): {
        name: string;
        school: number;
    };
}
export {};
