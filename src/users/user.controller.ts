import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  // @UseInterceptors(new TransformInterceptor())
  signup(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.signup(createUserDto);
  }

  @Post('/signin')
  signin(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.signin(createUserDto);
  }
}
