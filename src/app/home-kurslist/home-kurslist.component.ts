import {Component} from '@angular/core';
import {KursStorageService} from "../_services/kurs-storage.service";
import {FormatterService} from "../_services/formatter.service";
import {Kurs} from "../_shared/Kurs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-kurslist',
  templateUrl: './home-kurslist.component.html',
  styleUrls: ['./home-kurslist.component.css']
})
export class HomeKurslistComponent {

  public aktuelleKursliste!: Kurs[];

  public searchText: string = "";

  constructor(private storeService: KursStorageService, private router: Router, public formatter: FormatterService) {
  }

  ngOnInit() {
    this.getKursList()
  }

  public getKursList(): void {
    this.storeService.getAllForHome().subscribe((response: Kurs[]) => {
        this.aktuelleKursliste = response;
      }
    )
  }

  details(kurs: Kurs) {
    this.storeService.setKursDetailEntity(kurs);
    //this.router.navigateByUrl("homekursdetails/"+kurs.id);
    this.router.navigateByUrl("homekursdetails/"+kurs.id).then(() => {
      // Do something
    });
  }

}
