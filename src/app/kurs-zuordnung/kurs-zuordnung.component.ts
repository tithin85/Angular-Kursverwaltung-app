import { Component } from '@angular/core';
import {Person} from "../_shared/Person";
import {Kurs} from "../_shared/Kurs";
import {ZuordnungService} from "../_services/zuordnung.service";
import {PersonStorageService} from "../_services/person-storage.service";
import {KursStorageService} from "../_services/kurs-storage.service";
import {FormatterService} from "../_services/formatter.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-person-kurs-zuordnung',
  templateUrl: './kurs-zuordnung.component.html',
  styleUrls: ['./kurs-zuordnung.component.css']
})
export class KursZuordnungComponent {
  return:any;
  kursZuordnung:Kurs;
  public remainingPersonList?:Person[]
  public teilnehmerListe?:Person[]
  public interessanterListe?:Person[]
  public kursId?:number;
  id:any;
  //public personEntityList:Person[];
  freiplaetze?:number;
  kursname?:string;
  searchText : string ="";

  constructor(private zuordnunsstore:ZuordnungService, private kursStore:KursStorageService,
              private router:Router, private route:ActivatedRoute, public formatter:FormatterService) {
    this.kursId=this.kursStore.getKursDetailEntity().id;
    this.kursZuordnung=this.kursStore.getKursDetailEntity();
  }
  ngOnInit(){
    this.kursId=this.kursStore.getKursDetailEntity().id;
    this.kursZuordnung=this.kursStore.getKursDetailEntity();
//    this.id=this.route.snapshot.paramMap.get('personId')
//    this.personZuordnung=this.personEntityList.find(x=>x.id==this.id)
    this.remainingPersonen(this.kursId);
    this.teilnehmer(this.kursId);
    this.interessanter(this.kursId);
    this.getfreiplatz(this.kursId);
    this.kursname=this.kursStore.getKursDetailEntity().name;
  }

  remainingPersonen(kursId?:number){
    this.zuordnunsstore.getRemainingPersonen(kursId).subscribe((response:Person[])=>{
      this.remainingPersonList=response;
    })
  }
  teilnehmer(kursId?:number){
    this.zuordnunsstore.getTeilnehmer(kursId).subscribe((response:Person[])=>{
      this.teilnehmerListe=response;
    })
  }
  interessanter(kursId?:number){
    this.zuordnunsstore.getInteressanter(kursId).subscribe((response:Person[])=>{
      this.interessanterListe=response;

    })
  }
  getfreiplatz(kursId?:number){
    this.kursStore.getKursFromId(kursId).subscribe((response:Kurs)=>{
      this.freiplaetze=response.freiePlaetze;
    })
  }
  zuTeilnehmer(personId?:number,kursId?:number){
    let response=this.zuordnunsstore.addAlsTeilnehmer(personId,kursId)
    response.subscribe((data)=>{
      this.return=data;
      this.teilnehmer(kursId);
      this.remainingPersonen(kursId)
      this.interessanter(kursId)
      this.getfreiplatz(this.kursId)
    });
  }
  zuInteressesanter(personId?:number,kursId?:number) {
    let response = this.zuordnunsstore.addAlsInteressanter(personId, kursId)
    response.subscribe((data) => {
      this.return = data;
      this.interessanter(kursId);
      this.remainingPersonen(kursId);
      this.teilnehmer(kursId);
      this.getfreiplatz(this.kursId)

    });
  }
  deleteZuordnung(personId?:number,kursId?:number){
    let response =this.zuordnunsstore.deleteTeilnahmeStatus(personId,kursId)
    response.subscribe((data)=> {
      this.return = data;
      this.teilnehmer(kursId);
      this.interessanter(kursId);
      this.remainingPersonen(kursId);
      this.getfreiplatz(this.kursId)
    });
  }

  openPdfAnwesenheitsListe(kursId?:number) {
    this.zuordnunsstore.getPdfAnwesenheitsListe(kursId, this.kursname);
  }

}


