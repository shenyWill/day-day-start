import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestMiddleware } from './test.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TestMiddleware).forRoutes({
      path: 'hello1',
      method: RequestMethod.GET,
    });
    consumer.apply(TestMiddleware).forRoutes({
      path: 'world1',
      method: RequestMethod.GET,
    });
  }
}
