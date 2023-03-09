import { Component, OnInit } from '@angular/core';
import {KursStorageService} from "../_services/kurs-storage.service";
import {Router} from "@angular/router";
import { Location } from "@angular/common";
import {Kurs} from "../_shared/Kurs";

@Component({
  selector: 'app-kurs-details',
  templateUrl: './kurs-details.component.html',
  styleUrls: ['./kurs-details.component.css']
})
export class KursDetailsComponent implements OnInit{
  kursDetail: Kurs;
  return: any;
  constructor(private storeService: KursStorageService, private router: Router, private location: Location) {
  this.kursDetail={};
  }
  ngOnInit() :void{
    this.kursDetail=this.storeService.getKursDetailEntity();
  }
  back(){
    this.location.back();
  }
}
