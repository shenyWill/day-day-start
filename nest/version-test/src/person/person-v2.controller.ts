import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller({
    path: 'person',
    version: '2',
})
export class PersonV2Controller {
  constructor(private readonly personService: PersonService) {}

  @Get()
  findAllV2() {
    return this.personService.findAll() + ' => v2';
  }
}
