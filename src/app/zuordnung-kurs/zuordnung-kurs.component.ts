import { Component } from '@angular/core';
import {Person} from "../shared/Person";
import {Kurs} from "../shared/Kurs";
import {ZuordnungService} from "../shared/zuordnung.service";
import {PersonStoreService} from "../shared/person-store.service";
import {KursStoreService} from "../shared/kurs-store.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-zuordnung-kurs',
  templateUrl: './zuordnung-kurs.component.html',
  styleUrls: ['./zuordnung-kurs.component.css']
})
export class ZuordnungKursComponent {
  return:any;
  kursZuordnung?:Kurs;
  public remainingPersonList?:Person[]
  public teilnehmerListe?:Person[]
  public interessanterListe?:Person[]
  public kursId?:number;
  id:any;
  //public personEntityList:Person[];

  constructor(private zuordnunsstore:ZuordnungService, private kursStore:KursStoreService,private router:Router,private route:ActivatedRoute) {
    // this.personEntityList=[];
    // this.personStore.getAll().subscribe((response: Person[]) => {
    //     this.personEntityList = response;
    //   }
    // )
    this.kursId=this.kursStore.getKursDetailEntity().id;
    this.kursZuordnung=this.kursStore.getKursDetailEntity();
  }
  ngOnInit(){
    this.kursId=this.kursStore.getKursDetailEntity().id;
    this.kursZuordnung=this.kursStore.getKursDetailEntity();

// this.personStore.getAll().subscribe((response: Person[]) => {
//     this.personEntityList = response;
//   }
// )
//
//
//    this.id=this.route.snapshot.paramMap.get('personId')
//     this.personZuordnung=this.personEntityList.find(x=>x.id==this.id)
    this.remainingPersonen(this.kursId);
    this.teilnehmer(this.kursId);
    this.interessanter(this.kursId);

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
  zuTeilnehmer(personId?:number,kursId?:number){
    let response=this.zuordnunsstore.addAlsTeilnehmer(personId,kursId)
    response.subscribe((data)=>{
      this.return=data;
      this.teilnehmer(kursId);
      this.remainingPersonen(kursId)
      this.interessanter(kursId)
    });

  }
  zuInteressesanter(personId?:number,kursId?:number) {
    let response = this.zuordnunsstore.addAlsInteressanter(personId, kursId)
    response.subscribe((data) => {
      this.return = data;
      this.interessanter(kursId);
      this.remainingPersonen(kursId);
      this.teilnehmer(kursId);

    });
  }
  deleteZuordnung(personId?:number,kursId?:number){
    let response =this.zuordnunsstore.deleteTeilnahmeStatus(personId,kursId)
    response.subscribe((data)=> {
      this.return = data;
      this.teilnehmer(kursId);
      this.interessanter(kursId);
      this.remainingPersonen(kursId);
    });
  }

  back(){
    this.router.navigateByUrl("kurslist")
  }








}


