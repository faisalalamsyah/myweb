import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from "./registration/registration.component";
import { UserComponent } from "./users/user/user.component";
import { MainUserComponent } from "./users/mainuser.component";
import { UserListComponent } from "./users/user-list/user-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path : 'mainuser', component: MainUserComponent },
  { path : 'userlist', component: UserListComponent},
  { path : 'user', component: UserComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule {}