import { Injectable } from '@nestjs/common';

export  interface PostData {
    id: number;
    userId: number;
    content: string;
  }


@Injectable()
export class PostsService {
  private posts: PostData[] = [];

  async createPost(userId: number, content: string) {
    
    const newPost : PostData  = {
        id: Date.now(),
        userId,
        content
    };
    this.posts.push(newPost);
    return newPost;
  }

  async getUserPosts(userId: number) {
    return this.posts.filter(post => post.userId === userId);
  }
}
