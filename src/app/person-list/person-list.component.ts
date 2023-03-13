import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonStorageService} from "../_services/person-storage.service";
import {Person} from "../_shared/Person";
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
  personClicked: any;
  searchText : string ="";
  constructor(private storeService:PersonStorageService, private router :Router) {}

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
    //this.router.navigateByUrl("personform");
    this.router.navigateByUrl("personform").then(() => {
      // Do something
    });
  }

  details(person: Person) {
    this.storeService.setPersonDetailEntity(person);
    //this.router.navigateByUrl("persondetails");
    this.router.navigateByUrl("persondetails").then(() => {
      // Do something
    });
  }
  manageFromPerson(person:Person){
    this.storeService.setPersonDetailEntity(person);
    //this.router.navigateByUrl("zuordnung/person/"+person.id);
    this.router.navigateByUrl("zuordnung/person/"+person.id).then(() => {
      // Do something
    });
  }

  openPdfPersonenListe() {
    this.storeService.getPdfPersonenListe();
  }
}
