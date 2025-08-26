import { NestMiddleware } from '@nestjs/common';
export declare class LogMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
