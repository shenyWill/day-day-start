import { BeforeApplicationShutdown, Global, Module, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Global()
@Module({
  controllers: [PersonController],
  providers: [PersonService],
  exports: [PersonService],
})
export class PersonModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  onModuleInit() {
    console.log('PersonModule onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('PersonModule onApplicationBootstrap');
  }

  
  onModuleDestroy() {
    console.log('PersonModule onModuleDestroy');
  }
  beforeApplicationShutdown() {
    console.log('PersonModule beforeApplicationShutdown');
  }
  onApplicationShutdown() {
    console.log('PersonModule onApplicationShutdown');
  }
}
