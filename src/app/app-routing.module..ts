import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './_services/auth.guard';

import {HomeComponent} from "./home/home.component";
import {PersonFormComponent} from "./person-form/person-form.component";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonDetailsComponent} from "./person-details/person-details.component";
import {KursFormComponent} from "./kurs-form/kurs-form.component";
import {KursListComponent} from "./kurs-list/kurs-list.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegisterComponent} from "./user-register/user-register.component";
import {ZuordnungComponent} from "./zuordnung/zuordnung.component";
import {PageNotFoundComponentComponent} from "./page-not-found-component/page-not-found-component.component";
import {KursDetailsComponent} from "./kurs-details/kurs-details.component";

// ACHTUNG! Bitte den Path-Eintrag alles KLEIN schreiben
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'personform', component: PersonFormComponent, canActivate: [AuthGuard]  },
  { path: 'personlist', component: PersonListComponent, canActivate: [AuthGuard]  },
  { path: 'persondetails', component: PersonDetailsComponent, canActivate: [AuthGuard]  },
  { path: 'kursform', component: KursFormComponent, canActivate: [AuthGuard]  },
  { path: 'kurslist', component: KursListComponent, canActivate: [AuthGuard]  },
  { path: 'kursdetails', component: KursDetailsComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'zuordnung/:personId', component: ZuordnungComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  /*imports: [RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'register', component: UserRegisterComponent },
    { path: 'personform', component: PersonFormComponent, canActivate: [() => inject(AuthService).isLoggedIn()] }
  ]),*/
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
RouterModule.forRoot([
  {
    path: 'editor',
    component: EditorComponent,
    canDeactivate: [(cmp: EditorComponent) => !cmp.hasUnsavedChanges]
  },
  {
    path: 'demo',
    component: DemoComponent,
    canActivate: [() => inject(AuthService).isLoggedIn()]
  }
])
 */
