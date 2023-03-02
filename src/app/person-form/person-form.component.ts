import { Component } from '@angular/core';
import {Person} from "../shared/Person";
import {PersonStoreService} from "../shared/person-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
  person:Person;
  return:any
  emptyPerson:Person;
  constructor(private service:PersonStoreService,private router:Router) {
    this.person=service.getPersonEntity();
    this.emptyPerson={};



  }
  ngOnInit(){

  }
  anmeldung(){
    if(this.service.getPersonEntity().id==undefined){
    let response=this.service.addPerson(this.person);
    response.subscribe((data)=>this.return=data)
  }else{
      let response=this.service.updatePerson(this.person);
      response.subscribe((data)=>this.return=data)
      this.service.setter(this.emptyPerson);
      this.router.navigateByUrl('PersonList');

    }

  }


}
