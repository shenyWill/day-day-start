import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UseFilters } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { LoginGuard } from 'src/login.guard';
import { TimeInterceptor } from 'src/time.interceptor';
import { ValidatePipe } from 'src/validate.pipe';
import { TestFilter } from 'src/test.filter';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  // @UseGuards(LoginGuard)
  @UseInterceptors(TimeInterceptor)
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  @UseFilters(TestFilter)
  findOne(@Param('id', ValidatePipe) id: string) {
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
