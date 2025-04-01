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
    private usersRepository: Repository<UserModel>,
  ) {}



  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }

  async createUser(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.usersRepository.create({ username, password: hashedPassword });
    return this.usersRepository.save(newUser);
  }

  // async getAllUsers(): Promise<User[]> {
  //   return this.usersRepository.find();
  // }
  
}


