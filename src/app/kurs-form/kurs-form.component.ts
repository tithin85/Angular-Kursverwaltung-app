import { Component } from '@angular/core';
import {} from '@angular/forms'
import {KursStoreService} from "../shared/kurs-store.service";
import {Kurs} from "../shared/Kurs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kurs-form',
  templateUrl: './kurs-form.component.html',
  styleUrls: ['./kurs-form.component.css']
})
export class KursFormComponent {
  kurs: Kurs;
  return: any;
  emptyKurs: Kurs;


 constructor(private  service:KursStoreService,private router:Router) {
   this.kurs = service.getKursEntity();
   this.emptyKurs = {};
 }
  ngOnInit(){

 }
  addKurs(){
   if (this.service.getKursEntity().id==undefined){
   let response=this.service.addKurs(this.kurs);
   response.subscribe((data)=>this.return=data)
  } else{
     let response=this.service.updateKurs(this.kurs);
     response.subscribe((data)=>this.return=data)
     this.service.setter(this.emptyKurs);
     this.router.navigateByUrl("kurslist");
   }
  }
}

