import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [],
  declarations: [
    PostsComponent
  ],
  bootstrap: [PostsComponent],
})
export class AppModule {}
