import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UsersService } from "./_services/users.service";
import { PostsService } from "./_services/posts.service";
import { GalleryService } from "./_services/gallery.service";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    GalleryComponent,
    ProfileComponent,
    CommentsComponent,
    PhotosComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IndexComponent
      },
      {
        path: ':userId/posts',
        component: PostsComponent
      },
      {
        path: ':userId/posts/:postId/comments',
        component: CommentsComponent
      },
      {
        path: ':userId/albums',
        component: GalleryComponent
      },
      {
        path: ':userId/albums/:albumId/photos',
        component: PhotosComponent
      }
    ])
  ],
  providers: [
    UsersService,
    PostsService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
