import { Component, OnInit } from '@angular/core';

import { UsersService } from "../_services/users.service"
import { authUserId } from '../shared/auth-user'

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users;
  userId = authUserId;
  
  constructor( private _usersService: UsersService ) { }

  ngOnInit() {
    this.getUsers();

  }

  getUsers(  ){
    this._usersService.getUsers()
      .subscribe( res => {
        this.users = res.json();
      } )
  }



}
