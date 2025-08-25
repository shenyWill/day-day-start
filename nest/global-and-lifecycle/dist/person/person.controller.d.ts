import { OnApplicationBootstrap, OnModuleInit, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonController implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
    private readonly personService;
    constructor(personService: PersonService);
    onModuleInit(): void;
    onApplicationBootstrap(): void;
    onModuleDestroy(): void;
    beforeApplicationShutdown(): void;
    onApplicationShutdown(): void;
    create(createPersonDto: CreatePersonDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePersonDto: UpdatePersonDto): string;
    remove(id: string): string;
}
