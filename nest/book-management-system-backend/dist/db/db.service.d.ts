export declare class DbService {
    private options;
    read(): Promise<any>;
    write(data: Record<string, any>): Promise<void>;
}
