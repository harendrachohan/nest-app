import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User as UserModal } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports :[TypeOrmModule.forFeature([UserModal])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
