import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [PersonModule.register({
    name: 'person',
    age: 18,
  }), SchoolModule.register({
    schoolName: 'school',
    schoolCode: 19,
    isGlobal: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
