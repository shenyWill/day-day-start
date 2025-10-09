import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TestPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.data === 'school') {
      return Number(value) + 1;
    }
    return value + 1;
  }
}
