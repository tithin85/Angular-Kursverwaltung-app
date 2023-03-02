import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from "./person-list/person-list.component";
import {KursListComponent} from "./kurs-list/kurs-list.component";
import {PersonFormularComponent} from "./person-formular/person-formular.component";
import {HomeComponent} from "./home/home.component";
import {KursFormComponent} from "./kurs-form/kurs-form.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";

import { BoardUserComponent } from './board-user/board-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'personlist', component: PersonListComponent },
  { path: 'kurslist', component: KursListComponent },
  { path: 'personform', component: PersonFormularComponent },
  { path: 'kursform', component: KursFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent }/*,
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

