import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<UserModel> {
    return this.usersService.createUser(username, password );
  }

//   @Get()
//   async getUsers(): Promise<UserModel[]> {
//     return this.usersService.getAllUsers();
//   }
}
