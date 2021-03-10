import { Component, OnInit, OnDestroy } from '@angular/core'
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'posts',
  styles: [require('./posts.component.scss?raw')],
  template: require('./posts.component.html?raw'),
})
export class PostsComponent implements OnInit, OnDestroy {
  isLoading = false;
  isError = false;
  posts: Post[] = [];
  
  constructor(private service: PostsService) {}
  
  async ngOnInit() {
    this.isLoading = true;
    try {
      this.posts = await this.service.getAll();
      this.isLoading = false;
    } catch (e) {
      this.isError = true;
    }
  }

  trackFn(index: number, post: Post): number {
    return post.id;
  }

  ngOnDestroy() {
    console.log('Posts destroyed!');
  }
}
