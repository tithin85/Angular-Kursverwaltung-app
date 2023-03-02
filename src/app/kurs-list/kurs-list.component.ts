import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KursStoreService} from "../shared/kurs-store.service";
import {Kurs} from "../shared/Kurs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kurs-list',
  templateUrl: './kurs-list.component.html',
  styleUrls: ['./kurs-list.component.css']
})
export class KursListComponent {
  public kursList!: Kurs[];
  kurse: any;

  constructor(private storeService: KursStoreService, private router: Router) {
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
  updateKurs(kurs:Kurs){
    this.storeService.setter(kurs);
    this.router.navigateByUrl("KursList/UpdatingKurs")
  }

}
