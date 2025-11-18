import { IsNotEmpty, MinLength } from "class-validator";

export class LoginUserDto {
  /**
   * 用户名
   */
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;
  /**
   * 密码
   */
  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: '密码不能少于6位' })
  password: string;
}