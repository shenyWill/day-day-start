import { DynamicModule } from '@nestjs/common';
export interface DbModuleOptions {
    path: string;
}
export declare class DbModule {
    static register(options: DbModuleOptions): DynamicModule;
}
