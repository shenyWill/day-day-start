import { AppService } from './app.service';
import { TestValidDto } from './dto/test.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    testValid(body: TestValidDto): TestValidDto;
}
