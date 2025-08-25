import { BeforeApplicationShutdown, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
export declare class PersonModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
    onModuleInit(): void;
    onApplicationBootstrap(): void;
    onModuleDestroy(): void;
    beforeApplicationShutdown(): void;
    onApplicationShutdown(): void;
}
