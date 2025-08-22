import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(@Inject('app-service') private readonly appService: AppService) {}

  @Inject('person-service')
  private readonly personService;

  @Inject('school-service')
  private readonly schoolService;

  @Inject('info-service')
  private readonly infoService;

  @Get()
  getHello(): string {
    return this.appService.getHello() + this.infoService.name + this.infoService.age + this.infoService.school;
  }
}
