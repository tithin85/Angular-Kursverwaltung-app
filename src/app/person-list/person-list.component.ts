import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonStoreService} from "../shared/person-store.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  persons:any;
  constructor(private storeService:PersonStoreService) {
  }
  ngOnInit(){
    let response=this.storeService.getAll()
    response.subscribe((data)=>this.persons=data);
  }

}
