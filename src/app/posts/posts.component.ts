import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router"

import { ReversePipe } from "../_pipes/reverse.pipe";

import { PostsService } from "../_services/posts.service"
import { authUserId } from '../shared/auth-user'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  posts;
  authUserId = authUserId;
  userId;

  formIsActive = false;
  formNavIsActive = false;

  formTitle = "";
  formBody = "";

  constructor( private _postsService: PostsService,
               private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activatedRoute.params.forEach((params: Params) => {
      this.userId = +params["userId"];
      this.getPosts(this.userId);
    });
  }

  getPosts(userId) {
    this._postsService.getPosts(userId)
      .subscribe( res => {
        this.posts = res.json();
      })
   };

   addPost( ){
    let post = {
      body: this.formBody,
      title: this.formTitle,
      userId: this.userId
    };

    this.formBody = "";
    this.formTitle = "";

    this._postsService.addPost( post )
      .subscribe( res => {
        this.posts.push( res.json() );
      } )
  }

  showForm() {
    this.formIsActive = true;
    this.formNavIsActive = true
  }

  hideForm() {
    this.formIsActive = false;
    this.formNavIsActive = false;
  }

}
