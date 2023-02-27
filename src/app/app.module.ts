import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PersonListComponent } from './person-list/person-list.component';
import {AppRoutingModule} from "./app-routing.module.";
import { PersonFormularComponent } from './person-formular/person-formular.component';
import {PersonDetailsComponent} from "./person-details/person-details.component";
import { KursListComponent } from './kurs-list/kurs-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonFormularComponent,
    PersonListComponent,
    PersonDetailsComponent,
    PersonListComponent,
    KursListComponent,
    KursItemComponent,
    KursDetailsComponent,
    KursFormComponent,
    CreateKursComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
