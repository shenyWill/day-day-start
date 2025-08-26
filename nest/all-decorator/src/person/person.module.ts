import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  controllers: [PersonController],
  providers: [
    PersonService,
    {
      provide: 'yuan',
      useFactory: () => {
        return {
          name: 'yuan',
          age: 23,
        };
      }
    }
  ],
})
export class PersonModule {}
