import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PersonListComponent } from './person-list/person-list.component';
import {PersonDetailsComponent} from "./person-details/person-details.component";
import { KursListComponent } from './kurs-list/kurs-list.component';
import { KursItemComponent } from './kurs-item/kurs-item.component';
import { KursDetailsComponent } from './kurs-details/kurs-details.component';
import { KursFormComponent } from './kurs-form/kurs-form.component';
import { CreateKursComponent } from './create-kurs/create-kurs.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailsComponent,
    KursListComponent,
    KursItemComponent,
    KursDetailsComponent,
    KursFormComponent,
    CreateKursComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
