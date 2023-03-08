import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PersonFormComponent} from "./person-form/person-form.component";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonDetailsComponent} from "./person-details/person-details.component";
import {KursFormComponent} from "./kurs-form/kurs-form.component";
import {KursListComponent} from "./kurs-list/kurs-list.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegisterComponent} from "./user-register/user-register.component";
import {ZuordnungComponent} from "./zuordnung/zuordnung.component";

// ACHTUNG! Bitte den Path-Eintrag alles KLEIN schreiben
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'personform', component: PersonFormComponent },
  { path: 'personlist', component: PersonListComponent },
  { path: 'persondetails', component: PersonDetailsComponent },
  { path: 'kursform', component: KursFormComponent },
  { path: 'kurslist', component: KursListComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  {path: 'zuordnung/:personId', component: ZuordnungComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

