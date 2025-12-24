import { Inject } from '@gulux/gulux';
import { Controller, Get } from '@gulux/gulux/application-http';

import UserService from '../service/user';

@Controller()
export default class UserController {
  @Inject()
  private userService!: UserService;

  @Get('/')
  public async getUserList() {
    const result = await this.userService.getInfo();
    return result;
  }
}
