import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { LoginGuard } from "./login.guard";
import { Login } from "./login.decorator";

export function AllDecorator(name, age) {
  return applyDecorators(
    SetMetadata('roles', name),
    UseGuards(LoginGuard),
    Login(age),
  )
}