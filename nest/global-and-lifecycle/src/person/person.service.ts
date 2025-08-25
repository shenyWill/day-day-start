import { BeforeApplicationShutdown, Injectable, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  onModuleInit() {
    console.log('PersonService onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('PersonService onApplicationBootstrap');
  }


  onModuleDestroy() {
    console.log('PersonService onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log('PersonService beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('PersonService onApplicationShutdown');
  }

  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all person`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
