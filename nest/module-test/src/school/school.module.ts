import { forwardRef, Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { PersonModule } from 'src/person/person.module';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService],
  imports: [forwardRef(() => PersonModule)],
})
export class SchoolModule {}
