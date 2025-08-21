import { Injectable } from '@nestjs/common';

@Injectable()
export class OtherService {
    getOther() {
        return 'other-service';
    }
}
