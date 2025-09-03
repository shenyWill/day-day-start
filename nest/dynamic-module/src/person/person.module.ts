import { DynamicModule, Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({})
export class PersonModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: PersonModule,
      controllers: [PersonController],
      providers: [
        PersonService,
        {
          provide: 'PERSON_OPTIONS',
          useValue: options,
        }
      ],
    }
  }
}
