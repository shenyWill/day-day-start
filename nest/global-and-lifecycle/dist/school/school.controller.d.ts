import { OnApplicationShutdown } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { ModuleRef } from '@nestjs/core';
export declare class SchoolController implements OnApplicationShutdown {
    private readonly schoolService;
    private readonly moduleRef;
    constructor(schoolService: SchoolService, moduleRef: ModuleRef);
    onApplicationShutdown(): void;
    private readonly personService;
    create(createSchoolDto: CreateSchoolDto): string;
    getPerson(): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSchoolDto: UpdateSchoolDto): string;
    remove(id: string): string;
}
