import { AppService } from './app.service';
import { Man } from './dto/man.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postMan(body: Man): Man;
}
