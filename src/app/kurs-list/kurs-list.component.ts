import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KursStoreService} from "../shared/kurs-store.service";

@Component({
  selector: 'app-kurs-list',
  templateUrl: './kurs-list.component.html',
  styleUrls: ['./kurs-list.component.css']
})
export class KursListComponent {
  kurse:any;
  constructor(private storeService:KursStoreService) {
  }
  ngOnInit(){
    let response=this.storeService.getAll();
    response.subscribe((data)=>this.kurse=data);
  }

}
