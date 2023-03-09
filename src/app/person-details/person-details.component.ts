// @ts-ignore
import { Component, OnInit } from '@angular/core';
import{Person} from "../_shared/Person";
import {PersonStorageService} from "../_services/person-storage.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Kurs} from "../_shared/Kurs";
import {ZuordnungService} from "../_services/zuordnung.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})

export class PersonDetailsComponent implements OnInit{
  personDetail:Person;
  return:any;
  constructor(private storeService:PersonStorageService, private router:Router, private zuordnungsStore:ZuordnungService, private location: Location) {
    this.personDetail=this.storeService.getPersonDetailEntity();

  }

  ngOnInit(): void {
    this.personDetail=this.storeService.getPersonDetailEntity();
  }
  back(){
    this.location.back();
  }

  fromperson(personId:number){

    this.router.navigateByUrl("zuordnung/person/"+personId);


  }

  // setWerbung(){
  //   this.personDetail.werbung=true;
  //   let response=this.storeService.updatePerson(this.personDetail);
  //   response.subscribe((data)=>this.return=data)
  // }

}
