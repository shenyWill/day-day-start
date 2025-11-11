import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @MinLength(6, { message: '密码不能少于6位' })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}