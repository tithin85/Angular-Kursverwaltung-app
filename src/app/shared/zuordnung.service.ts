import { Injectable } from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {Zuordnung} from "./zuordnung";
import {HttpClient} from "@angular/common/http";
import {PersonStoreService} from "./person-store.service";
import {KursStoreService} from "./kurs-store.service";
import {List} from "immutable";
import {Kurs} from "./Kurs";
import {ActivatedRoute} from "@angular/router";
import {Person} from "./Person";

@Injectable({
  providedIn: 'root'
})
export class ZuordnungService {
//remainingKursList:Kurs[]=[];
//private _refreschrequired=new Subject<void>();



  constructor(private http:HttpClient,private personStore:PersonStoreService,private kursStore:KursStoreService) { }
  // get Refreschrequired(){
  //   return this._refreschrequired;
  // }
addAlsTeilnehmer(personId?:number,kursId?:number):Observable<Zuordnung>{
    let body={
      "personId":personId,
      "kursId":kursId,
      "teilnehmer":true
    }
    return this.http.post<Zuordnung>("http://localhost:8080/zuordnung/add",body)

}
addAlsInteressanter(personId?:number,kursId?:number):Observable<Zuordnung>{
  let body={
    "personId":personId,
    "kursId":kursId,
    "teilnehmer":false
  }
  return this.http.post<Zuordnung>("http://localhost:8080/zuordnung/add",body)

}
getTeilnahmeKurse(personId?:number):Observable<Kurs[]> {
  return this.http.get<Kurs[]>("http://localhost:8080/zuordnung/personAlsTeilnehmer/"+personId)
}
  getInteressierteKurse(personId?:number):Observable<Kurs[]> {
    return this.http.get<Kurs[]>("http://localhost:8080/zuordnung/personAlsInteressanter/"+personId)
  }



getRemainingKurs(personid?:number):Observable<Kurs[]>{
     return this.http.get<Kurs[]>("http://localhost:8080/zuordnung/remainingKurs/"+personid)

}
getRemainingPersonen(kursid?:number):Observable<Person[]>{
  return this.http.get<Person[]>("http://localhost:8080/zuordnung/remainingPersonen/"+kursid)

}
getTeilnehmer(kursid?:number){
    return this.http.get<Person[]>("http://localhost:8080/zuordnung/kursTeilnehmer/"+kursid)
}
getInteressanter(kursid?:number){
  return this.http.get<Person[]>("http://localhost:8080/zuordnung/kursInteressanter/"+kursid)

}
deleteTeilnahmeStatus(personId?:number,kursId?:number):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/zuordnung/delete/"+personId+"/"+kursId);
}
fromPersonRemainingList(personId:number){
  // this.getRemainingKurs(personId).subscribe((response:Kurs[])=>{
  //   this.remainingKursList=response;
  // })
  // console.log(JSON.stringify(this.remainingKursList));
}
// getRemainingKursList():Kurs[]{
//
//     return this.remainingKursList;
//   }



}
