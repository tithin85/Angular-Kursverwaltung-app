import { Component } from '@angular/core';
import {KursStoreService} from "../shared/kurs-store.service";

@Component({
  selector: 'app-kurs-form',
  templateUrl: './kurs-form.component.html',
  styleUrls: ['./kurs-form.component.css']
})
export class KursFormComponent {

 constructor(private  storeService:KursStoreService) {
 }
  ngOnInit(){
    let response=this.storeService.add();
 }

}
