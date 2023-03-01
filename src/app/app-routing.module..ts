import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from "./person-list/person-list.component";
import {KursListComponent} from "./kurs-list/kurs-list.component";
import {PersonFormularComponent} from "./person-formular/person-formular.component";
import {HomeComponent} from "./home/home.component";
import {KursFormComponent} from "./kurs-form/kurs-form.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'PersonList', component: PersonListComponent },
  { path: 'KursList', component: KursListComponent },
  { path: 'PersonForm', component: PersonFormularComponent },
  { path: 'KursForm', component: KursFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

