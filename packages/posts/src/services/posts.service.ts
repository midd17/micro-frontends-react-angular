import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';


@Injectable({ providedIn: 'root'})
export class PostsService {

  getAll(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => posts.slice(0, 20));
  }
}