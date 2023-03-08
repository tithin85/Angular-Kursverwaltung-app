// @ts-ignore
import { Component, OnInit } from '@angular/core';
import{Person} from "../shared/Person";
import {PersonStoreService} from "../shared/person-store.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Kurs} from "../shared/Kurs";
import {ZuordnungService} from "../shared/zuordnung.service";


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})

export class PersonDetailsComponent implements OnInit{
  personDetail:Person;
  return:any;
  constructor(private storeService:PersonStoreService,private router:Router,private zuordnungsStore:ZuordnungService) {
    this.personDetail=this.storeService.getPersonDetailEntity();

  }

  ngOnInit(): void {
    this.personDetail=this.storeService.getPersonDetailEntity();
  }
  back(){
    this.router.navigateByUrl("personlist")

  }
  fromperson(personId:number){

    this.router.navigateByUrl("zuordnung/"+personId);


  }

  // setWerbung(){
  //   this.personDetail.werbung=true;
  //   let response=this.storeService.updatePerson(this.personDetail);
  //   response.subscribe((data)=>this.return=data)
  // }

}
