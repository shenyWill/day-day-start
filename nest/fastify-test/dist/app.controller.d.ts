import { AppService } from './app.service';
import type { FastifyReply, FastifyRequest } from 'fastify';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(req: FastifyRequest, res: FastifyReply): void;
}
