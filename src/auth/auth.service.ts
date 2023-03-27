import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthDto } from './dto/create-auth.dto';
import { hash, genSalt } from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(createAuthDto: CreateAuthDto): Promise<any> {
    const { email, password } = createAuthDto;

    // generate salt to hash password
    const salt = await genSalt();

    // hash password with previously generated salt
    const hashedPsw = await hash(password, salt);

    const createdUser = new this.userModel({ email, password: hashedPsw });

    // return arbitrary user
    return createdUser.save();
  }
}
