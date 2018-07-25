import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class UserService {
userList: AngularFireList<any>;
selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) {}
  
  getDataUser(){
    this.userList = this.firebase.list('users');
    return this.userList;
  }

  insertUser(user: User){
    this.userList.push({
    email: user.email,
    username : user.username,
    phone : user.phone,
    password : user.password
    });
  }

  updateUser(user: User){
    this.userList.update(user.$key,
      {
        email: user.email,
        username : user.username,
        phone : user.phone,
        password : user.password
        } );
  }

  deleteUser($key : string){
    this.userList.remove($key);
  }
}
