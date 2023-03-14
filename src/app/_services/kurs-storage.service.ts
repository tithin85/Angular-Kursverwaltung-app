import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
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

  deleteKurs(kursId?: number): Observable<Kurs[]> {
    return this.http.delete<Kurs[]>("http://localhost:8080/kurs/delete/" + kursId)
  }

  updateKurs(kurs: Kurs): Observable<Kurs> {
    return this.http.put<Kurs>("http://localhost:8080/kurs/update", kurs);
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

/*  Hier wird das Pdf direkt im neuen Tab geöffnet, allerdings mit einem kryptischen Namen
  getPdfKursListe(): void {
    this.http.get('http://localhost:8080/kurs/pdf-kursliste', { responseType: 'blob' }).subscribe((response: Blob) => {
      const file = new Blob([response], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }*/

  getPdfKursListe(): void {
    this.http.get('http://localhost:8080/kurs/pdf-kursliste', { responseType: 'blob', observe: 'response' }).subscribe((response: HttpResponse<Blob>) => {
      const file = new Blob(response.body ? [response.body] : [], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      const filename = 'Kursliste.pdf';
      const a = document.createElement('a');
      a.href = fileURL;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
    });
  }
}
