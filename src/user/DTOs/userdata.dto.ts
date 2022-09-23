import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class userDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  age: string;
};