import { Controller, Get, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';
import type { FastifyReply, FastifyRequest } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req: FastifyRequest, @Response() res: FastifyReply) {
    res.header('url1', req.url);
    // return this.appService.getHello();
    res.send('hello world1');
  }
}
