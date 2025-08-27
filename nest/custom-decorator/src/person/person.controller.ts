import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { LoginGuard } from 'src/login.guard';
import { Login } from 'src/login.decorator';
import { AllDecorator } from 'src/allDecorator';
import { customDecorator } from 'src/person-custom-decorator';
import { headerDecorator } from 'src/header-custom-decorator';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  // @SetMetadata('roles', {name: 'yuan', age: 30})
  // @UseGuards(LoginGuard)
  // @Login('yuan')
  @AllDecorator('yuan', 30)
  findOne(@Param('id') id: string, @customDecorator(new ParseIntPipe()) data: string, @headerDecorator('user-agent') userAgent: string) {
    console.log('data', data, userAgent);
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
