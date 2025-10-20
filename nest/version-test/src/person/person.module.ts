import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { PersonV2Controller } from './person-v2.controller';

@Module({
  controllers: [PersonV2Controller, PersonController],
  providers: [PersonService],
})
export class PersonModule {}
