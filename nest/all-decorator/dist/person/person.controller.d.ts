import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    private readonly yuan;
    create(createPersonDto: CreatePersonDto): string;
    getSession(session: Record<string, any>): Record<string, any>;
    findAll(headers: Record<string, string>, ip: string): string;
    findOne(id: string): string;
    update(id: string, updatePersonDto: UpdatePersonDto): string;
    remove(id: string): string;
}
