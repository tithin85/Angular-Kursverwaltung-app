import { Component } from '@angular/core';
import {Person} from "../_shared/Person";
import {PersonStorageService} from "../_services/person-storage.service";
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
  personSaved: any ;
  constructor(private service:PersonStorageService, private router:Router) {
    this.person=service.getPersonEntity();
    this.emptyPerson={};
  }
  ngOnInit(){
  }
  personNeuUpdate(){
    if(this.service.getPersonEntity().id==undefined){
    let response=this.service.addPerson(this.person);
    response.subscribe((data)=>{
      this.return=data
      alert('Neu Person mit der Id '+this.return.id+' erfolgreichwurde erfolgreich erzeugt.')
    })
      this.service.setter(this.emptyPerson);
  }else{
      let response=this.service.updatePerson(this.person);
      response.subscribe((data)=>this.return=data)
      this.service.setter(this.emptyPerson);
      //this.router.navigateByUrl('personlist');
      this.router.navigateByUrl("personlist").then(() => {
        // Do something
      });
    }
  }
}
