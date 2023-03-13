import {Component} from '@angular/core';
import {KursStorageService} from "../_services/kurs-storage.service";
import {FormatterService} from "../_services/formatter.service";
import {Kurs} from "../_shared/Kurs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kurs-list',
  templateUrl: './kurs-list.component.html',
  styleUrls: ['./kurs-list.component.css']
})
export class KursListComponent {
  public kursList!: Kurs[];
  public teilnehmer?:number;

  constructor(private storeService: KursStorageService, private router: Router, public formatter: FormatterService) {
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

  delete(kurs:Kurs) {
     this.storeService.setter(kurs)

       if(this.storeService.getKursEntity().aktuelleTnZahl==0){
         if(confirm('Sicher, dass Sie diesen Kurs '+kurs.name+' löschen wollen?')) {
           this.storeService.deleteKurs(this.storeService.getKursEntity().id).subscribe((response: Kurs[]) => {
             this.kursList = response;
           })
         }
       }else{
         alert("Dieser Kurs hat schon Teilnehmer und darf nicht gelöscht werden.")
       }
    }

  updateKurs(kurs: Kurs) {
    this.storeService.setter(kurs);
    //this.router.navigateByUrl("kursform");
    this.router.navigateByUrl("kursform").then(() => {
      // Do something
    });
  }

  searchText: string = "";

  details(kurs: Kurs) {
    this.storeService.setKursDetailEntity(kurs);
    //this.router.navigateByUrl("kursdetails");
    this.router.navigateByUrl("kursdetails").then(() => {
      // Do something
    });
  }
  manageFromKurs(kurs: Kurs){
    this.storeService.setKursDetailEntity(kurs);
    //this.router.navigateByUrl("zuordnung/kurs/"+kurs.id);
    this.router.navigateByUrl("zuordnung/kurs/"+kurs.id).then(() => {
      // Do something
    });
  }

  openPdfKursListe() {
    this.storeService.getPdfKursListe();
  }
}
