import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XxxModule } from './xxx/xxx.module';
import { AaaModule } from './aaa/aaa.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [XxxModule, AaaModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
