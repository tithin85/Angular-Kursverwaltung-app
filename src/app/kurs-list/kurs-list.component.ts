import {Component} from '@angular/core';
import {KursStorageService} from "../_services/kurs-storage.service";
import {Kurs} from "../_shared/Kurs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kurs-list',
  templateUrl: './kurs-list.component.html',
  styleUrls: ['./kurs-list.component.css']
})
export class KursListComponent {
  public kursList!: Kurs[];

  constructor(private storeService: KursStorageService, private router: Router) {
  }

  public getKurs(): void {
    this.storeService.getAll().subscribe((response: Kurs[]) => {
        this.kursList = response;
      }
    )
  }

  ngOnInit() {
    this.getKurs()
  }

  delete(id?: number) {
    if (id !== undefined) {
      this.storeService.deleteKurs(id).subscribe((response: Kurs[]) => {
        this.kursList = response;
      })
    }
  }

  updateKurs(kurs: Kurs) {
    this.storeService.setter(kurs);
    this.router.navigateByUrl("kursform");
  }

  searchText: string = "";

  details(kurs: Kurs) {
    this.storeService.setKursDetailEntity(kurs);
    this.router.navigateByUrl("kursdetails");
  }
  manageFromKurs(kurs: Kurs){
    this.storeService.setKursDetailEntity(kurs);
    this.router.navigateByUrl("zuordnung/kurs/"+kurs.id);
  }
}
