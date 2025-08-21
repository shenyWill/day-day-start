import { Inject, Injectable } from '@nestjs/common';
import { OtherService } from './other/other.service';

@Injectable()
export class AppService {

  @Inject(OtherService)
  private otherService: OtherService;

  getHello(): string {
    return 'Hello World!' + this.otherService.getOther();
  }
}
