import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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

  
  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.usersService.getAllUsers();
  }
}
