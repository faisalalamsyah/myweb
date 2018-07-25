import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/user.service";
import { NgForm } from '@angular/forms';
import { HomeComponent } from "../../home/home.component";
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService : UserService,   private route: ActivatedRoute,
    private router: Router, private toastr : ToastrService) { }

  ngOnInit() {


  }

  onSubmit(userForm : NgForm){
    this.userService.insertUser(userForm.value);
    this.resetForm(userForm);
    this.toastr.success("Register Berhasil, Silahkan login untuk masuk", 'Selamat');
    this.router.navigate(['']);
  }

  resetForm(userForm : NgForm){
      if (userForm != null)
      userForm.reset();
      this.userService.selectedUser = {
      $key : null,
      email : '',
      username : '',
      phone : null,
      password : ''
    }
  }

}
