import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Kurs} from "../_shared/Kurs";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class KursStorageService {
  private kursEntity: Kurs;
  kursList: Observable<Kurs[]>;
  private kursDetailEntity: Kurs

  constructor(private http: HttpClient) {
    this.kursList = this.getAll();
    this.kursEntity = {};
    this.kursDetailEntity = {};
  }

  // Fuer alle Besucher
  getAllForHome(): Observable<Kurs[]> {
    return this.http.get<Kurs[]>("http://localhost:8080/homekurslist");
  }

  getKursDetails(kursId?: number): Observable<Kurs> {
    return this.http.get<Kurs>("http://localhost:8080/homekursdetails/" + kursId)
  }

  // Fuer eingeloggte User
  getAll(): Observable<Kurs[]> {
    return this.http.get<Kurs[]>("http://localhost:8080/kurs/all");
  }

  addKurs(kurs: Kurs): Observable<Kurs> {
    return this.http.post<Kurs>("http://localhost:8080/kurs/add", kurs);
  }

  deleteKurs(kursId: number): Observable<Kurs[]> {
    return this.http.delete<Kurs[]>("http://localhost:8080/kurs/delete/" + kursId)
  }

  updateKurs(kurs: Kurs): Observable<Kurs[]> {
    return this.http.put<Kurs[]>("http://localhost:8080/kurs/update", kurs);
  }

  setter(kurs: Kurs) {
    this.kursEntity = kurs;
  }

  getKursEntity(): Kurs {
    return this.kursEntity;
  }

  setKursDetailEntity(kurs: Kurs) {
    this.kursDetailEntity = kurs;
  }

  getKursDetailEntity(): Kurs {
    return this.kursDetailEntity;
  }

  getKursFromId(kursId?: number): Observable<Kurs> {
    return this.http.get<Kurs>("http://localhost:8080/kurs/find/" + kursId)
  }

}
