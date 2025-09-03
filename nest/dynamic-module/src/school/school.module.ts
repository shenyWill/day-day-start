import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { ConfigurableModuleClass } from './school.module.definition';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolModule extends ConfigurableModuleClass {}
