import { Component, OnInit } from '@angular/core';
import { UserService } from "./shared/user.service";

@Component({
  selector: 'main-users',
  templateUrl: './mainuser.component.html',
  styleUrls: ['./mainuser.component.css'],
  providers : [UserService]
})
export class MainUserComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

}
