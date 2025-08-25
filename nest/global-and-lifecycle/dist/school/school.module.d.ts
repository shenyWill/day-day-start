import { OnApplicationBootstrap } from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common';
export declare class SchoolModule implements OnModuleInit, OnApplicationBootstrap {
    onModuleInit(): void;
    onApplicationBootstrap(): void;
}
