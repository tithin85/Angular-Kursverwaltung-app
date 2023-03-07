import { Component, OnInit } from '@angular/core';
import {KursStoreService} from "../shared/kurs-store.service";
import {Router} from "@angular/router";
import {Kurs} from "../shared/Kurs";

@Component({
  selector: 'app-kurs-details',
  templateUrl: './kurs-details.component.html',
  styleUrls: ['./kurs-details.component.css']
})
export class KursDetailsComponent implements OnInit{
  kursDetail: Kurs;
  return: any;
  constructor(private storeService: KursStoreService, private router: Router) {
  this.kursDetail={};
  }
  ngOnInit() :void{
    this.kursDetail=this.storeService.getKursDetailEntity();
  }
  back(){
    this.router.navigateByUrl("kurslist")
  }
}
