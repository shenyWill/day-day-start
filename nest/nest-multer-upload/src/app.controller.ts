import { Body, Controller, FileTypeValidator, Get, HttpException, HttpStatus, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { storage } from './storage';
import { MulterUploadValidationPipePipe } from './multer-upload-validation-pipe.pipe';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    dest: './uploads',
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    console.log(file);
    console.log(body);
    return 'upload file success';
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files', 10, {
    dest: './uploads',
  }))
  uploadFiles(@UploadedFiles() files: Express.Multer.File[], @Body() body: any) {
    console.log(files);
    console.log(body);
    return 'upload files success';
  }

  @Post('upload-many')
  @UseInterceptors(FileFieldsInterceptor([
    {
      name: 'image-file',
      maxCount: 2,
    },
    {
      name: 'png-file',
      maxCount: 3,
    }
  ], {
    dest: './uploads',
  }))
  uploadManyFiles(@UploadedFiles() files: { 'image-file': Express.Multer.File[], 'png-file': Express.Multer.File[] }, @Body() body: any) {
    console.log(files);
    console.log(body);
    return 'upload many files success';
  }

  @Post('upload-any')
  @UseInterceptors(AnyFilesInterceptor({
    storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
      files:2,
    },
  }))
  uploadAnyFiles(@UploadedFiles(
    // MulterUploadValidationPipePipe
    new ParseFilePipe({
      exceptionFactory: (errors) => {
        return new HttpException('文件上传失败：' + errors, HttpStatus.BAD_REQUEST);
      },
      validators: [
        new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024, message: '文件大小不能超过 10MB' }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)/ }),
      ],
    })
  ) files: Express.Multer.File[], @Body() body: any) {
    console.log(files);
    console.log(body);
    return 'upload any files success';
  }
}
