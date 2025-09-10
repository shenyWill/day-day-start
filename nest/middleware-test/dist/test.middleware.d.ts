import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class TestMiddleware implements NestMiddleware {
    private readonly appService;
    use(req: Request, res: Response, next: () => void): void;
}
