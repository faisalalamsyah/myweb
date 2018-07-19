import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  HomeComponent,
  RegistrationComponent,
  ],

  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  RouterModule,
  NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
