import {Component, OnInit} from '@angular/core';
import {ZuordnungService} from "../_services/zuordnung.service";
import {Person} from "../_shared/Person";
import {Kurs} from "../_shared/Kurs";
import {PersonStorageService} from "../_services/person-storage.service";
import {KursStorageService} from "../_services/kurs-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-person-zuordnung',
  templateUrl: './zuordnung.component.html',
  styleUrls: ['./zuordnung.component.css']
})
export class ZuordnungComponent implements OnInit{
  return:any;
  personZuordnung?:Person;
  kursZuordnung?:Kurs;
  public remainingKursList?:Kurs[]
  public teilnahmeKursListe?:Kurs[]
  public interessierteKursListe?:Kurs[]
  public personId?:number;
  id:any;
  //public personEntityList:Person[];

  constructor(private zuordnunsstore:ZuordnungService, private personStore:PersonStorageService, private kursStore:KursStorageService, private router:Router, private route:ActivatedRoute) {
    // this.personEntityList=[];
    // this.personStore.getAll().subscribe((response: Person[]) => {
    //     this.personEntityList = response;
    //   }
    // )
    this.personId=this.personStore.getPersonDetailEntity().id;
    this.personZuordnung=this.personStore.getPersonDetailEntity();
  }
  ngOnInit(){
    this.personId=this.personStore.getPersonDetailEntity().id;
    this.personZuordnung=this.personStore.getPersonDetailEntity();
// this.personStore.getAll().subscribe((response: Person[]) => {
//     this.personEntityList = response;
//   }
// )
//
//
//    this.id=this.route.snapshot.paramMap.get('personId')
//     this.personZuordnung=this.personEntityList.find(x=>x.id==this.id)
    this.remainingKurse(this.personId);
    this.teilnahmeKurse(this.personId);
    this.interessierteKurse(this.personId);

  }


  remainingKurse(personId?:number){
      this.zuordnunsstore.getRemainingKurs(personId).subscribe((response:Kurs[])=>{
        this.remainingKursList=response;

      })

    }
    teilnahmeKurse(personId?:number){
      this.zuordnunsstore.getTeilnahmeKurse(personId).subscribe((response:Kurs[])=>{
        this.teilnahmeKursListe=response;

      })

    }
  interessierteKurse(personId?:number){
    this.zuordnunsstore.getInteressierteKurse(personId).subscribe((response:Kurs[])=>{
      this.interessierteKursListe=response;

    })

  }
  zuTeilnahme(personId?:number,kursId?:number){
    let response=this.zuordnunsstore.addAlsTeilnehmer(personId,kursId)
    response.subscribe((data)=>{
      this.return=data;
      this.teilnahmeKurse(personId);
      this.remainingKurse(personId)
      this.interessierteKurse(personId)
    });

  }
  zuInteresse(personId?:number,kursId?:number) {
    let response = this.zuordnunsstore.addAlsInteressanter(personId, kursId)
    response.subscribe((data) => {
      this.return = data;
      //this.teilnahmeKurse(personId);
      this.interessierteKurse(personId);
      this.remainingKurse(personId);
      this.teilnahmeKurse(personId)

    });
  }
  deleteZuordnung(personId?:number,kursId?:number){
    let response =this.zuordnunsstore.deleteTeilnahmeStatus(personId,kursId)
    response.subscribe((data)=> {
      this.return = data;
      this.teilnahmeKurse(personId);
      this.interessierteKurse(personId);
      this.remainingKurse(personId);
    });
  }

  back(){
    this.router.navigateByUrl("personlist")
  }








}
