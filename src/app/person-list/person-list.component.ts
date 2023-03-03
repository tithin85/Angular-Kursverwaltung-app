import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonStoreService} from "../shared/person-store.service";
import {Person} from "../shared/Person";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  public personList!:Person[];
  persons:any;
  constructor(private storeService:PersonStoreService, private router :Router) {}

  public getPerson():void{
      this.storeService.getAll().subscribe((response: Person[]) => {
          this.personList = response;
        }
      )
  }
  ngOnInit(){
    this.getPerson()

  }
  delete(id?:number) {
    if (id !== undefined) {

      this.storeService.deletePerson(id).subscribe((response: Person[]) => {
          this.personList = response;
        }
      )


    }
  }
  updatePerson(person:Person){
    this.storeService.setter(person);
    this.router.navigateByUrl("personform");
  }


  details(person: Person) {
    this.storeService.setPersonDetailEntity(person);
    this.router.navigateByUrl("persondetails");

  }
}
