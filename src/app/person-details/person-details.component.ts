// @ts-ignore
import { Component, OnInit } from '@angular/core';
import{Person} from "../_shared/Person";
import {PersonStorageService} from "../_services/person-storage.service";
import {FormatterService} from "../_services/formatter.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Kurs} from "../_shared/Kurs";
import {ZuordnungService} from "../_services/zuordnung.service";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})

export class PersonDetailsComponent implements OnInit{
  personDetail:Person;
  return:any;
  constructor(private storeService:PersonStorageService, private router:Router, private zuordnungsStore:ZuordnungService, public formatter:FormatterService) {
    this.personDetail=this.storeService.getPersonDetailEntity();
  }

  ngOnInit(): void {
    this.personDetail=this.storeService.getPersonDetailEntity();
  }

  fromperson(personId:number){
    //this.router.navigateByUrl("zuordnung/person/"+personId);
    this.router.navigateByUrl("zuordnung/person/"+personId).then(() => {
      // Do something
    });
  }

  // setWerbung(){
  //   this.personDetail.werbung=true;
  //   let response=this.storeService.updatePerson(this.personDetail);
  //   response.subscribe((data)=>this.return=data)
  // }

}
