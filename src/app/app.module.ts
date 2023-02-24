import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PersonListComponent } from './person-list/person-list.component';
import {PersonDetailsComponent} from "./person-details/person-details.component";

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
