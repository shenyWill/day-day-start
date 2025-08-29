import { forwardRef, Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { SchoolModule } from 'src/school/school.module';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
  imports: [forwardRef(() => SchoolModule)],
})
export class PersonModule {}
