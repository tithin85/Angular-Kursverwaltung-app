import { Injectable } from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {Zuordnung} from "../_shared/zuordnung";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {PersonStorageService} from "./person-storage.service";
import {KursStorageService} from "./kurs-storage.service";
import {List} from "immutable";
import {Kurs} from "../_shared/Kurs";
import {ActivatedRoute} from "@angular/router";
import {Person} from "../_shared/Person";

@Injectable({
  providedIn: 'root'
})
export class ZuordnungService {

  constructor(private http:HttpClient, private personStore:PersonStorageService, private kursStore:KursStorageService) { }

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


  getPdfAnwesenheitsListe(kursId?:number, kursname?:string): void {
    this.http.get('http://localhost:8080/zuordnung/pdf-anwesenheitsliste/'+kursId, { responseType: 'blob', observe: 'response' }).subscribe((response: HttpResponse<Blob>) => {
      const file = new Blob(response.body ? [response.body] : [], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      kursname = kursname!.replace(/ /g, "_");
      const heute = new Date();
      const options = { day: "2-digit", month: "2-digit", year: "numeric" } as const;
      const datum = heute.toLocaleDateString("de-DE", options);
      const filename = 'Anwesenheitsliste_' + kursname + '_' + datum +'.pdf';
      const a = document.createElement('a');
      a.href = fileURL;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
    });
  }



}
