import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class TestPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
