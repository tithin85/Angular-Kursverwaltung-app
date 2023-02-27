import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class KursStoreService {
  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get("http://localhost:8080/kurs/all");
  }

  add() {
    return this.http.post("http://localhost:8080/kurs/add",{"id":70,"name":"PytAngular","anzahlTage":15,"wieOftinWoche":2,"startDatum":"2025-01-01","endeDatum":"2025-05-05","aktuelleTnZahl":5,"minTnZahl":1,"maxTnZahl":6,"freiePlaetze":9,"gebuehrBrutto":1200.0,"gebuehrNetto":0.0,"mwstEuro":10.0,"mwstProzent":10.0,"kursBeschreibung":"asdadsasd","status":"Active"});
  }

}
