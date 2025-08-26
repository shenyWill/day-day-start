import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'shenyuan',
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      }
    })
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
