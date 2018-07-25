import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Registration } from "./registration.model";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registrationList: AngularFireList<any>;
  selectedRegistration: Registration = new Registration();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.registrationList = this.firebase.list('registration');
    return this.registrationList;
  }

  insertUser(registration : Registration){
    this.registrationList.push({
      email: registration.email,
      username: registration.username,
      phone: registration.phone,
      password: registration.password
    });
  }

  updateUser(registration: Registration){
    this.registrationList.update(registration.$key,{
      email: registration.email,
      username: registration.username,
      phone: registration.phone,
      password : registration.phone
    });
  }

  deleteUser($key:string){
    this.registrationList.remove($key);
  }
}
