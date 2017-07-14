import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router"
import { Router } from '@angular/router';
import { Location } from '@angular/common'

import { ReversePipe } from "../_pipes/reverse.pipe";
import { PostsService } from "../_services/posts.service"
import { UsersService } from "../_services/users.service"
import { authUserId } from '../shared/auth-user'

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

  comments;
  post_id;

  authUser;
  authUserId = authUserId;
  userId;

  formIsActive = false;
  formNavIsActive = false;

  formBody;
  formName;

  constructor(private _postsService: PostsService,
              private _usersService: UsersService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _location: Location) { }

  ngOnInit() {
    this._activatedRoute.params.forEach((params: Params) => {
      this.userId = +params["userId"];
    });

    this.post_id = +this._activatedRoute.snapshot.params['postId'];
    this.getComments(this.post_id);
    this.getUser(authUserId);
  }

    // this._router.events.subscribe(event => {
    //     if(event.constructor.name === "NavigationStart") {
    //       let postId = +this._route.snapshot.params['postId'];
    //       this.getComments(postId);
    //     }
    //   });

  getUser(id) {
    this._usersService.getUser(id)
      .subscribe( res => {
        this.authUser = res.json();
      })
  }

  getComments(id) {
    this._postsService.getComments(id)
      .subscribe( res => {
        this.comments = res.json();
      })
  }

  addComment( ){
   let comment = {
     body: this.formBody,
     name: this.formName,
     postId: this.post_id,
     email: this.authUser.email,
   };

   this.formBody = "";
   this.formName = "";
   //
   this._postsService.addComment( comment )
     .subscribe( res => {
       this.comments.push( res.json() );
     })
   }

  deleteItem (comments, id) {
    this._postsService.deleteItem(comments, id)
  }

  goBack() {
    this._location.back();
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
