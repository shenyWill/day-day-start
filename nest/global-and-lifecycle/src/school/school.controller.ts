import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, OnApplicationShutdown } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PersonService } from 'src/person/person.service';
import { ModuleRef } from '@nestjs/core';

@Controller('school')
export class SchoolController implements OnApplicationShutdown {
  constructor(private readonly schoolService: SchoolService) {}

  onApplicationShutdown() {
    console.log('SchoolController onApplicationShutdown');
  }

  @Inject(PersonService)
  private readonly personService: PersonService;

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get('/person')
  getPerson() {
    return this.personService.findOne(1);
  }

  @Get()
  findAll() {
    return this.schoolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolService.remove(+id);
  }
}
