import { Injectable } from '@gulux/gulux';

@Injectable()
export default class UserService {
  public async getInfo() {
    return { name: 'gulux', email: 'gulux@bytedance.com' };
  }
}
