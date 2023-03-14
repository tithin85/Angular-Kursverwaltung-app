import { Component, Input } from '@angular/core';

import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import {KursStorageService} from "../_services/kurs-storage.service";
import {Kurs} from "../_shared/Kurs";
import {Router} from "@angular/router";
import {Person} from "../_shared/Person";

@Component({
  selector: 'app-kurs-form',
  templateUrl: './kurs-form.component.html',
  styleUrls: ['./kurs-form.component.css']
})
export class KursFormComponent {
//   currentDate: string;
  kurs: Kurs;
  return: any;
  emptyKurs: Kurs;
  public today: Date = new Date();
  return2:any;

 constructor(private  service:KursStorageService, private router:Router) {
   this.kurs = service.getKursEntity();
   this.emptyKurs = {};


 }
  ngOnInit(){

 }
  addKurs(){
   if (this.service.getKursEntity().id==undefined){
   let response=this.service.addKurs(this.kurs);
   response.subscribe((data)=>{
     this.return=data
     if(this.return.id!=undefined){
       alert("kurs successfully created mit id "+this.return.id)

     }

   })
     this.service.setter(this.emptyKurs);

  } else{
     let response=this.service.updateKurs(this.kurs);
     response.subscribe((data:Kurs)=>this.return=data)
     this.service.setter(this.emptyKurs);
     this.router.navigateByUrl("kurslist").then(() => {
       this.service.getAll().subscribe((response:Kurs[]) => {
           this.return2 = response;
         }
       )
       // Do something
     });;
   }
  }


}

