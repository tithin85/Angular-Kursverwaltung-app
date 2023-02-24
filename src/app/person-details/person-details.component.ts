// @ts-ignore
import { Component, OnInit } from '@angular/core';
import{Person} from "../shared/Person";
import {PersonStoreService} from "../shared/person-store.service";


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})

export class PersonDetailsComponent implements OnInit{
  ngOnInit(): void {
  }

}
