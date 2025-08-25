import { Controller, Get, Post, Body, Patch, Param, Delete, OnApplicationBootstrap, OnModuleInit, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('person')
export class PersonController implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(private readonly personService: PersonService) {}

  onModuleInit() {
    console.log('PersonController onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('PersonController onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('PersonController onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log('PersonController beforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('PersonController onApplicationShutdown');
  }

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
