import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PersonStoreService} from "../shared/person-store.service";

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent {

  constructor(private router:Router) {
  }
  ngOnInit(){
  }

}
