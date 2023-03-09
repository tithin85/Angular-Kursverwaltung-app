import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module.";
import {AppComponent} from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';

import {PersonListComponent} from './person-list/person-list.component';
import {PersonFormComponent} from './person-form/person-form.component';
import {PersonDetailsComponent} from "./person-details/person-details.component";

import {KursListComponent} from './kurs-list/kurs-list.component';
import {KursFormComponent} from "./kurs-form/kurs-form.component";
import {KursItemComponent} from "./kurs-item/kurs-item.component";
import {KursDetailsComponent} from "./kurs-details/kurs-details.component";

import { authInterceptorProviders } from './_helpers/auth.interceptor';

//import {SearchPersonComponent} from "./person-search/person-search.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { ZuordnungComponent } from './person-zuordnung/zuordnung.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ZuordnungKursComponent } from './kurs-zuordnung/zuordnung-kurs.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent,
    PersonListComponent,
    PersonFormComponent,
    PersonListComponent,
    PersonDetailsComponent,
    KursListComponent,
    KursItemComponent,
    KursDetailsComponent,
    KursFormComponent,
    ZuordnungComponent,
    PageNotFoundComponentComponent,
    ZuordnungKursComponent



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
