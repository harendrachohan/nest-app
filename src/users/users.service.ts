import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserModel } from './users.entity';


export  interface User {
  id: number;
  username: string, 
  password: string
}


@Injectable()
export class UsersService {
  private users : User[] = [];
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) {}

  async createUser(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({ username, password: hashedPassword });
    return this.userRepository.save(newUser);
  }

  async findOne(username: string){
    return this.userRepository.findOne({ where: { username } });
  }
  
  async getAllUsers(){
    return this.userRepository.find();
  }
  
}


