import { BeforeApplicationShutdown, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonService implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
    onModuleInit(): void;
    onApplicationBootstrap(): void;
    onModuleDestroy(): void;
    beforeApplicationShutdown(): void;
    onApplicationShutdown(): void;
    create(createPersonDto: CreatePersonDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePersonDto: UpdatePersonDto): string;
    remove(id: number): string;
}
