import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLogger3 } from './logger3';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [AppController],
  providers: [AppService, MyLogger3],
})
export class AppModule {}
