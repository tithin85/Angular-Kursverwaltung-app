import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonListComponent} from "./person-list/person-list.component";
import {KursListComponent} from "./kurs-list/kurs-list.component";
import {PersonFormularComponent} from "./person-formular/person-formular.component";
import {HomeComponent} from "./home/home.component";
import {KursFormComponent} from "./kurs-form/kurs-form.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {PersonDetailsComponent} from "./person-details/person-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'PersonList', component: PersonListComponent },
  { path: 'KursList', component: KursListComponent },
  { path: 'PersonForm', component: PersonFormularComponent },
  { path: 'KursForm', component: KursFormComponent }, /*,
  { path: 'personlist', component: PersonListComponent },
  { path: 'kurslist', component: KursListComponent },
  { path: 'personform', component: PersonFormularComponent },
  { path: 'kursform', component: KursFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
];
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent }*/


  {
    path: 'PersonDetails',
    component: PersonDetailsComponent
  },
  {
    path: 'PersonList/UpdatingPerson',
    component: PersonFormularComponent
  },

  {
    path: 'KursList/UpdatingKurs',
    component: KursFormComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

