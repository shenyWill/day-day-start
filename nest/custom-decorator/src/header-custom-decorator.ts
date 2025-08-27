import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const headerDecorator = createParamDecorator((key: string, ctx: ExecutionContext) => {
  const headers = ctx.switchToHttp().getRequest().headers;
  return key ? headers[key] : headers;
})
