import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MulterUploadValidationPipePipe implements PipeTransform {
  transform(value: Express.Multer.File[], metadata: ArgumentMetadata) {
    if(value.some(item => item.size > 1024)) {
      throw new HttpException('文件大于 10k', HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
