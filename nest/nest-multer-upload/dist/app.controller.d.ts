import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    uploadFile(file: Express.Multer.File, body: any): string;
    uploadFiles(files: Express.Multer.File[], body: any): string;
    uploadManyFiles(files: {
        'image-file': Express.Multer.File[];
        'png-file': Express.Multer.File[];
    }, body: any): string;
    uploadAnyFiles(files: Express.Multer.File[], body: any): string;
}
