import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Kurs} from "./Kurs";

@Injectable({
  providedIn: 'root'
})

export class KursStoreService {
  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get("http://localhost:8080/kurs/all");
  }

  addKurs(kurs:Kurs) {
    return this.http.post("http://localhost:8080/kurs/add",kurs);
  }

}
