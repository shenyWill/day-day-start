import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseInterceptors, SetMetadata, Headers, Ip, Session } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { TestInterceptor } from 'src/test.interceptor';

@Controller('person')
@SetMetadata('roles', {name: 'will', school: 'sec'})
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Inject('yuan')
  private readonly yuan: {
    name: string;
    age: number;
  };

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get('session')
  getSession(@Session() session: Record<string, any>) {
    if (!session.count) {
      session.count = 1;
    } else {
      session.count++;
    }
    console.log(session);
    return session;
  }

  @Get()
  @UseInterceptors(TestInterceptor)
  @SetMetadata('roles', {name: 'yuan', age: 30})
  findAll(@Headers() headers: Record<string, string>, @Ip() ip: string) {
    console.log(this.yuan, headers, ip);
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
