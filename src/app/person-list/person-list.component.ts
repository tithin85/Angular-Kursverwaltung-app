import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonStorageService} from "../_services/person-storage.service";
import {Person} from "../_shared/Person";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {ZuordnungService} from "../_services/zuordnung.service";
import {Kurs} from "../_shared/Kurs";


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
  constructor(private storeService:PersonStorageService, private router :Router,private zuStore:ZuordnungService) {}

  public getPerson():void{
      this.storeService.getAll().subscribe((response: Person[]) => {
          this.personList = response;
        }
      )
  }

  ngOnInit(){
    this.getPerson()
  }

  delete(person:Person) {
    this.zuStore.getTeilnahmeKurse(person.id).subscribe((response:Kurs[])=>{
      if(response.length==0){
        if(confirm('Sicher, dass Sie diese Person '+person.name+' löschen wollen?')){
          this.storeService.deletePerson(person.id).subscribe((response: Person[]) => {
              this.personList = response;
            }
          )
        }

      }else{
        alert("Diese Person ist ein Teilnehmer und darf nicht gelöscht werden.")
      }
    })

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
