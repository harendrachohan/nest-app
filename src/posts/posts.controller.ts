import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { PostsService, PostData} from './posts.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPost(@Req() req, @Body() body) {
    return this.postsService.createPost(req.user.id, body.content);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getUserPosts(@Req() req):Promise<PostData[]> {
    return this.postsService.getUserPosts(req.user.id);
  }
}
