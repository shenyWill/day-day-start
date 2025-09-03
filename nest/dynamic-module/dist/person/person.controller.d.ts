import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    private readonly options;
    create(createPersonDto: CreatePersonDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePersonDto: UpdatePersonDto): string;
    remove(id: string): string;
}
