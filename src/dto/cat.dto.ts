import { IsNotEmpty, IsNumber } from 'class-validator';

export class CatDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}