import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PersonListComponent } from './person-list/person-list.component';
import { KursListComponent } from './kurs-list/kurs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    KursListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
