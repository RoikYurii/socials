import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router"

import { PostsService } from "../_services/posts.service"

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  posts;

  constructor( private _postsService: PostsService,
               private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activatedRoute.params.forEach((params: Params) => {
      let userId = +params["userId"];
      this.getPosts(userId);
    });

}

  getPosts(userId) {
    this._postsService.getPosts(userId)
      .subscribe( res => {
        this.posts = res.json();
      })
   };

}
