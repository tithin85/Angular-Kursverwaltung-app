import {Component} from '@angular/core';
import { UserService } from '../_services/user.service';
import {HttpClient} from "@angular/common/http";
import {KursStoreService} from "../shared/kurs-store.service";
import {Kurs} from "../shared/Kurs";

@Component({
  selector: 'app-kurs-list',
  templateUrl: './kurs-list.component.html',
  styleUrls: ['./kurs-list.component.css']
})
export class KursListComponent {
  public kursList!: Kurs[];
  kurse: any;
  content?: string;

  constructor(private storeService: KursStoreService, private userService: UserService) {  }

  public getKurs(): void {
    this.storeService.getAll().subscribe((response: Kurs[]) => {
        this.kursList = response;
      }
    )
  }

  ngOnInit(): void {
    this.getKurs()
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }

  delete(id?: number) {
    if (id !== undefined) {
      this.storeService.deleteKurs(id).subscribe((response: Kurs[]) => {
        this.kursList = response;
      })
    }
  }

}
