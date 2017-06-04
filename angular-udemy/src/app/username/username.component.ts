import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {
  }

  isInputEmpty() {
    return this.username === '';
  }

  onUserCreated() {
    this.username = '';
  }


}
