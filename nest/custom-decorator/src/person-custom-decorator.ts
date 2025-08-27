import { createParamDecorator } from "@nestjs/common";

export const customDecorator = createParamDecorator((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  console.log('customDecorator',data, request.params);
  return 123;
})