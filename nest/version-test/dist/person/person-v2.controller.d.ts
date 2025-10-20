import { PersonService } from './person.service';
export declare class PersonV2Controller {
    private readonly personService;
    constructor(personService: PersonService);
    findAllV2(): string;
}
