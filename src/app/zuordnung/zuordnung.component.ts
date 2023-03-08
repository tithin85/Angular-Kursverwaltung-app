import {Component, OnInit} from '@angular/core';
import {ZuordnungService} from "../shared/zuordnung.service";
import {Person} from "../shared/Person";
import {Kurs} from "../shared/Kurs";
import {PersonStoreService} from "../shared/person-store.service";
import {KursStoreService} from "../shared/kurs-store.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-zuordnung',
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

  constructor(private zuordnunsstore:ZuordnungService, private personStore:PersonStoreService,private kursStore:KursStoreService,private router:Router,private route:ActivatedRoute) {
    //this.id=this.route.snapshot.paramMap.get('personId')
    //this.personZuordnung=this.personStore.personEntityList.find(x=>x.id==this.id)
    //this.personId=this.personZuordnung?.id;
    //this.personZuordnung={}
    //this.kursZuordnung={};

      //this.personId=this.personStore.getPersonDetailEntity().id;



    //this.remainingKursList=this.zuordnunsstore.getRemainingKursList();


  }
  ngOnInit(){
    //this.personId=this.personStore.getPersonDetailEntity().id;



   this.id=this.route.snapshot.paramMap.get('personId')
    this.personZuordnung=this.personStore.personEntityList.find(x=>x.id==this.id)
    this.personId=this.personZuordnung?.id;
    this.remainingKurse(this.personZuordnung?.id);
    this.teilnahmeKurse(this.personZuordnung?.id);
    this.interessierteKurse(this.personZuordnung?.id);



    //  this.zuordnunsstore.Refreschrequired.subscribe(response=>{
    //    this.remainingKurse(this.personId);
    // //   this.teilnahmeKurse(this.personId);
    // //   this.interessierteKurse(this.personId);
    //  })

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
    //this.zuordnunsstore.getRemainingKurs(personId).subscribe((response:Kurs[])=>{
     // this.remainingKursList=response;
   // });
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
  setztAlsInteressanter(personId?:number,kursId?:number){
    let response=this.zuordnunsstore.addAlsInteressanter(personId,kursId)
    response.subscribe((data)=>this.return=data);
  }




    // this.personZuordnung=this.personStore.getPersonDetailEntity();
    // if(this.personZuordnung.id!=undefined&&this.kursZuordnung.id!=undefined){
    //   let response=this.zuordnunsstore.addAlsTeilnehmer(this.personZuordnung.id,this.kursZuordnung.id)
    //   response.subscribe((data)=>this.return=data)

   // }




}
