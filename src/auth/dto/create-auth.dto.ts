import { IsEmail, Length } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  email: string;

  @Length(6, 20, { message: 'Password should be 6-20 characters long' })
  password: string;
}
