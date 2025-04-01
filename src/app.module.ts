import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
      DatabaseModule,
      UsersModule,
      AuthModule, 
      PostsModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
