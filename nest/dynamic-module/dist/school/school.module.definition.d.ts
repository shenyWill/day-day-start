export interface SchoolModuleOptions {
    schoolName: string;
    schoolCode: number;
}
export declare const ConfigurableModuleClass: import("@nestjs/common").ConfigurableModuleCls<SchoolModuleOptions, "register", "create", {
    isGlobal: boolean;
}>, MODULE_OPTIONS_TOKEN: string | symbol, OPTIONS_TYPE: SchoolModuleOptions & Partial<{
    isGlobal: boolean;
}>;
