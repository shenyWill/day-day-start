import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', Number.isNaN(value));
    if (!Number.isInteger(value)) {
      console.log('value', value);
      throw new BadRequestException('参数错误');
    }
    return typeof value === 'number' ? value * 10 : parseInt(value) * 10;
  }
}
