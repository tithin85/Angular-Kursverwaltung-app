import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonListComponent} from "./person-list/person-list.component";
import {KursListComponent} from "./kurs-list/kurs-list.component";
import {PersonFormularComponent} from "./person-formular/person-formular.component";
const routes: Routes = [ {
  path: 'PersonList',
  component:PersonListComponent
},
  {
    path: 'KursList',
    component:KursListComponent
  },
  {
    path: 'PersonForm',
    component: PersonFormularComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
