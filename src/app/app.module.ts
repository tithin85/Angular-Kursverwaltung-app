import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module.";
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import {PersonListComponent} from './person-list/person-list.component';
import {PersonFormularComponent} from './person-formular/person-formular.component';
import {PersonDetailsComponent} from "./person-details/person-details.component";

import {KursListComponent} from './kurs-list/kurs-list.component';
import {KursFormComponent} from "./kurs-form/kurs-form.component";
import {KursItemComponent} from "./kurs-item/kurs-item.component";
import {KursDetailsComponent} from "./kurs-details/kurs-details.component";

import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    PersonListComponent,
    PersonFormularComponent,
    PersonListComponent,
    PersonDetailsComponent,
    KursListComponent,
    KursItemComponent,
    KursDetailsComponent,
    KursFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
