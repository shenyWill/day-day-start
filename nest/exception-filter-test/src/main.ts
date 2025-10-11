import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HelloFilter } from './hello.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HelloFilter());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
