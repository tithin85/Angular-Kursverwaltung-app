import { Component } from '@angular/core';
import {Person} from "../shared/Person";
import {PersonStoreService} from "../shared/person-store.service";

@Component({
  selector: 'app-person-formular',
  templateUrl: './person-formular.component.html',
  styleUrls: ['./person-formular.component.css']
})
export class PersonFormularComponent {
  person:Person;
  return:any
  constructor(private service:PersonStoreService) {
    this.person={
      "titel":"",
      "name":"",
      "vorname":"",
      "strasse":"",
      "plz":"",
      "ort":"",
      "email":""

    }

  }
  ngOnInit(){

  }
  anmeldung(){
    let response=this.service.addPerson(this.person);
    response.subscribe((data)=>this.return=data)
  }


}
