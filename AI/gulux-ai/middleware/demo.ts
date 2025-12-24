import { Middleware, Next, GuluXMiddleware, Req, NextFunction } from '@gulux/gulux';
import { HTTPRequest } from '@gulux/gulux/application-http';

@Middleware()
export default class RequestFormatMiddleware extends GuluXMiddleware {
  public async use(@Req() req: HTTPRequest, @Next() next: NextFunction) {
    const start = Date.now();
    await next();
    console.log(`> ${req.url} takes ${Date.now() - start} ms`);
  }
}
