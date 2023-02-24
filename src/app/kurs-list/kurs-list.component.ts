import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-kurs-list',
  templateUrl: './kurs-list.component.html',
  styleUrls: ['./kurs-list.component.css']
})
export class KursListComponent {
  kurse:any;
  constructor(private http:HttpClient) {
  }
  ngOnInit(){
    let response=this.http.get("http://localhost:8080/kurs/all");
    response.subscribe((data)=>this.kurse=data);
  }

}
