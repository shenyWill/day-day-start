import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './logger';
import { MyLogger2 } from './logger2';
import { MyLogger3 } from './logger3';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, { logger: new MyLogger2() });
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(MyLogger3));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
