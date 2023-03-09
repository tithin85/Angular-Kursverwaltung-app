import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";

import {AppRoutingModule} from "./app-routing.module.";
import {AppComponent} from './app.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserLoginComponent } from './user-login/user-login.component';

import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import {PersonListComponent} from './person-list/person-list.component';
import {PersonFormComponent} from './person-form/person-form.component';
import {PersonDetailsComponent} from "./person-details/person-details.component";
import { PersonZuordnungComponent } from './person-zuordnung/person-zuordnung.component';

import {KursListComponent} from './kurs-list/kurs-list.component';
import {KursFormComponent} from "./kurs-form/kurs-form.component";
import {KursDetailsComponent} from "./kurs-details/kurs-details.component";
import { KursZuordnungComponent } from './kurs-zuordnung/kurs-zuordnung.component';
import { FffffComponent } from './fffff/fffff.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent,
    PageNotFoundComponentComponent,

    PersonListComponent,
    PersonFormComponent,
    PersonDetailsComponent,
    PersonZuordnungComponent,

    KursListComponent,
    KursFormComponent,
    KursDetailsComponent,
    KursZuordnungComponent,
    FffffComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
