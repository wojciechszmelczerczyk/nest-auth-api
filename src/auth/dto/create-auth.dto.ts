import { IsEmail, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  email: string;

  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  password: string;
}
