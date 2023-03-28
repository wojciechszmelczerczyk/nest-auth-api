import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { hash, genSalt, compare } from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<any> {
    // intercept data from user dto
    const { email, password } = createUserDto;

    // check if user with provided email exists
    const user = await this.userModel.findOne({ email });

    // if so, throw an error
    if (user)
      throw new BadRequestException('User with provided email already exists');

    // otherwise proceed and generate salt to hash password
    const salt = await genSalt();

    // hash password with previously generated salt
    const hashedPsw = await hash(password, salt);

    // create new user
    const createdUser = new this.userModel({ email, password: hashedPsw });

    // return new user
    return createdUser.save();
  }

  async signin(createUserDto: CreateUserDto): Promise<any> {
    // intercept data from user dto
    const { email, password } = createUserDto;

    // check if user with provided email exists
    const user = await this.userModel.findOne({ email });

    // if not throw an error
    if (!user)
      throw new BadRequestException(
        'Could not find the user with provided email',
      );

    // otherwise compare provided password with hashed one from db
    const passwordValid = await compare(password, user.password);

    // if passwords doesn't match, throw an error
    if (!passwordValid) throw new BadRequestException('Incorrect password');

    // otherwise sign and return jsonwebtoken
    const jwt = this.jwtService.sign(
      { email, password },
      { secret: process.env.JWT_SECRET },
    );

    // response with jsonwebtoken
    return { jwt, email: user.email };
  }
}
