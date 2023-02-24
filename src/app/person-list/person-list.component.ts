import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  persons:any;
  constructor(private http:HttpClient) {
  }
  ngOnInit(){
    let response=this.http.get("http://localhost:8080/person/all");
    response.subscribe((data)=>this.persons=data);
  }

}
