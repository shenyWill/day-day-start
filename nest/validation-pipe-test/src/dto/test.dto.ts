import { IsInt } from 'class-validator';


export class TestValidDto {
  name: string;
  @IsInt({
    message: '必须是整数'
  })
  age: number;
}