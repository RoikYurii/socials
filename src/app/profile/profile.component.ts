import { Component, OnInit } from '@angular/core';

import { UsersService } from "../_services/users.service"
import { authUserId } from '../shared/auth-user'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  userId = authUserId;
  user;

  constructor( private _usersService: UsersService) { }

  ngOnInit() {
    this.getUser(this.userId);
  };

  getUser(userId) {
    this._usersService.getUser(userId)
      .subscribe( res => {
        this.user = res.json();
      })
  };

};
