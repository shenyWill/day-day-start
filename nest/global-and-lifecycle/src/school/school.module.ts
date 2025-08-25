import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { PersonModule } from 'src/person/person.module';
import { OnModuleInit } from '@nestjs/common';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService],
  // imports: [PersonModule],
})
export class SchoolModule implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('SchoolModule onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('SchoolModule onApplicationBootstrap');
  }
}
