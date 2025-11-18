import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly dbService: DbService) {}

  async register(createUserDto: RegisterUserDto) {
    const users: User[] = await this.dbService.read();
    const foundUser = users.find((user) => user.username === createUserDto.username);
    if (foundUser) {
        throw new BadRequestException('用户名已存在');
    }
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    users.push(user);
    await this.dbService.write(users);
    return user;
  }

  async login(loginUserDto: LoginUserDto) {
    const users: User[] = await this.dbService.read();
    const foundUser = users.find((user) => user.username === loginUserDto.username);
    if (!foundUser) {
        throw new BadRequestException('用户名不存在');
    }
    if (foundUser.password !== loginUserDto.password) {
        throw new BadRequestException('密码错误');
    }
    return foundUser;
  }
}
