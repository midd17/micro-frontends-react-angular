import { Component, OnInit, OnDestroy } from '@angular/core'
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'posts',
  styles: [require('./posts.component.css')],
  template: require('./posts.component.html'),
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

  ngOnDestroy() {
    console.log('Posts destroyed!');
  }
}
