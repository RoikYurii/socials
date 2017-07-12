import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Router } from '@angular/router';
import { Location } from '@angular/common'

import { PostsService } from "../_services/posts.service"
@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

  comments;

  constructor(private _postsService: PostsService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _location: Location) { }

  ngOnInit() {

    let post_id = +this._route.snapshot.params['postId'];
    this.getComments(post_id);
  }

    // this._router.events.subscribe(event => {
    //     if(event.constructor.name === "NavigationStart") {
    //       let postId = +this._route.snapshot.params['postId'];
    //       this.getComments(postId);
    //     }
    //   });



    getComments(id) {
      this._postsService.getComments(id)
        .subscribe( res => {
          this.comments = res.json();
        })
    }

    goBack() {
      this._location.back();
    }

}
