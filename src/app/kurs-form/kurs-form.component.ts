import { Component } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms'
import {KursStoreService} from "../shared/kurs-store.service";
import {Kurs} from "../shared/Kurs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kurs-form',
  templateUrl: './kurs-form.component.html',
  styleUrls: ['./kurs-form.component.css']
})
export class KursFormComponent {
  currentDate: string;
  kurs: Kurs;
  return: any;
  emptyKurs: Kurs;

  options = ["Aktiv", "Geplant", "Abgesagt"]
  ngSelect = this.options[0];

 constructor(private  service:KursStoreService,private router:Router) {
   this.kurs = service.getKursEntity();
   this.emptyKurs = {};
   this.currentDate = new Date().toISOString().slice(0, 10);
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

