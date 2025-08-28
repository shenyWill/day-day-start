import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonService {
    create(createPersonDto: CreatePersonDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePersonDto: UpdatePersonDto): string;
    remove(id: number): string;
}
