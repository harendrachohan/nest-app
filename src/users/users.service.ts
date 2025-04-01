import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';


export  interface User {
  id: number;
  username: string, 
  password: string
}


@Injectable()
export class UsersService {
  private users : User[] = [];


  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }

  async createUser(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now(), username, password: hashedPassword };
    this.users.push(newUser);
    return { id: newUser.id, username: newUser.username }; // Don't return password
  }
  
}
