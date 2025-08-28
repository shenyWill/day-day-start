import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, UseGuards } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { TestFilter } from 'src/test.filter';
import { PersonException } from 'src/person.exception';
import { TestGuard } from 'src/test.guard';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/role';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  @UseFilters(TestFilter)
  @UseGuards(TestGuard)
  @Roles(Role.Admin)
  findAll() {
    throw new PersonException('yuan', 30);
    return this.personService.findAll();
  }

  @Get(':id')
  @UseGuards(TestGuard)
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
