import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/user.service";
import { ToastrService } from 'ngx-toastr';

import { User } from "../shared/user.model";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList : User[];

  constructor(private userService : UserService) { }

  ngOnInit() {

    var x = this.userService.getDataUser();
    x.snapshotChanges().subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.userList.push(y as User);
      });
    });
  }

  onEdit(usr : User){
    this.userService.selectedUser = usr;
  }

  onDelete(key: string){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteUser(key);
  
    }
  }
}
