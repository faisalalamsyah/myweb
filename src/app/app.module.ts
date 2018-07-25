import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MainUserComponent } from "./users/mainuser.component";
import { ToastrModule } from "ngx-toastr";
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
//import { UserService } from "./users/shared/user.service";


@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  HomeComponent,
  RegistrationComponent,
  MainUserComponent,
  UserComponent,
  UserListComponent,
  UploadFormComponent
  ],

  imports: [
  BrowserModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AppRoutingModule,
  FormsModule,
  RouterModule,
  AngularFireDatabaseModule,
  ToastrModule.forRoot(),
  NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
