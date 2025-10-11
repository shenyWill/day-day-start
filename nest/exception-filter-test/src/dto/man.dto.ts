import { IsEmpty, IsNotEmpty, IsNumber, isNumber, IsString } from "class-validator";

export class Man {
  @IsNotEmpty({ message: 'name 不能为空' })
  @IsString({ message: 'name 必须是字符串' })
  name: string;

  @IsNumber({}, { message: 'age 必须是数字' })
  age: number;
}