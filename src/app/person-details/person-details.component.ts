// @ts-ignore
import { Component, OnInit } from '@angular/core';
import{Person} from "../shared/Person";
import {PersonStoreService} from "../shared/person-store.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})

export class PersonDetailsComponent implements OnInit{
  personDetail:Person;
  return:any;
  constructor(private storeService:PersonStoreService,private router:Router) {
    this.personDetail={};

  }

  ngOnInit(): void {
    this.personDetail=this.storeService.getPersonDetailEntity();
  }
  back(){
    this.router.navigateByUrl("personlist")

  }
  // setWerbung(){
  //   this.personDetail.werbung=true;
  //   let response=this.storeService.updatePerson(this.personDetail);
  //   response.subscribe((data)=>this.return=data)
  // }

}
