import { Injectable } from '@angular/core';

import { Http } from '@angular/http'

@Injectable()
export class PostsService {

  constructor( private _http: Http ) { }

  getPosts(id){
    return this._http.get('https://jsonplaceholder.typicode.com/posts?userId=' + id);
  };

  getComments(id){
    return this._http.get('https://jsonplaceholder.typicode.com/comments?postId=' + id);
  };

  addPost( post ){
    return this._http.post('https://jsonplaceholder.typicode.com/posts', post)
  }

  addComment( comment ){
    return this._http.post('https://jsonplaceholder.typicode.com/comments', comment)
  }

  deleteItem (posts, postId) {
    return posts.splice( postId, 1 );
  }

};
