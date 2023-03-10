import {Component, OnInit} from '@angular/core';
import {KursStorageService} from "../_services/kurs-storage.service";
import {FormatterService} from "../_services/formatter.service";
import {Router} from "@angular/router";
import { Location } from "@angular/common";
import {Kurs} from "../_shared/Kurs";

@Component({
  selector: 'app-home-kursdetails',
  templateUrl: './home-kursdetails.component.html',
  styleUrls: ['./home-kursdetails.component.css']
})
export class HomeKursdetailsComponent  implements OnInit{
  kursDetail: Kurs;
  betreff?: string = '';
  body?: any = '';
  return: any;
  constructor(private storeService: KursStorageService, private router: Router, private location: Location, public formatter: FormatterService) {
    this.kursDetail={};
  }
  ngOnInit() :void{
    this.kursDetail=this.storeService.getKursDetailEntity();
  }
  back(){
    this.location.back();
  }

}
