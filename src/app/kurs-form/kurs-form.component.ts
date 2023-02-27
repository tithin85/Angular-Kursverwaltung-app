import { Component } from '@angular/core';
import {KursStoreService} from "../shared/kurs-store.service";
import {Kurs} from "../shared/Kurs";

@Component({
  selector: 'app-kurs-form',
  templateUrl: './kurs-form.component.html',
  styleUrls: ['./kurs-form.component.css']
})
export class KursFormComponent {
  kurs: Kurs;
  return: any;


 constructor(private  service:KursStoreService) {
   this.kurs = {

     //name: "",
     //anzahlTage: 0,
     //wieOftinWoche: 0,
     //startDatum: new Date(),
     //minTnZahl: 0,
    // maxTnZahl: 0,
     //gebuehrBrutto: 0,
    // mwstProzent:0,
    // kursBeschreibung: "",
     //status: ""
   }
 }
  ngOnInit(){

 }
  addKurs(){
   let response=this.service.addKurs(this.kurs);
   response.subscribe((data)=>this.return=data)
  }
}

