import { Inject, Injectable } from '@nestjs/common';
import type { DbModuleOptions } from './db.module';
import { access, readFile, writeFile } from 'fs/promises';

@Injectable()
export class DbService {
    @Inject('OPTIONS')
    private options: DbModuleOptions;

    async read() {
        const filePath = this.options.path;

        try {
            await access(filePath);
        } catch (error) {
            return [];
        }
        const str = await readFile(filePath, {
            encoding: 'utf-8',
        });
        if (!str) {
            return [];
        }
        return JSON.parse(str);
    }

    async write(data: Record<string, any>) {
        const filePath = this.options.path;
        await writeFile(filePath, JSON.stringify(data), {
            encoding: 'utf-8',
        });
    }
}
