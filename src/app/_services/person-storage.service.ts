
import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Person} from "../_shared/Person";
import {BehaviorSubject, Observable} from "rxjs";
import {List} from 'immutable';

@Injectable({
  providedIn: 'root'
})

export class PersonStorageService implements OnInit {

  private personEntity: Person;
  //personList:Observable<Person[]>;
  private personDetailEntity?: Person;
  private zuordnungsPerson: Person;
  public personEntityList: Person[];

  constructor(private http: HttpClient) {
    //this.personList=this.getAll();
    this.personEntity = {};
    //this.personDetailEntity={};
    this.zuordnungsPerson = {};
    this.personEntityList = [];
    this.getAll().subscribe((response: Person[]) => {
      this.personEntityList = response
    })
  }

  ngOnInit() {
    this.getAll().subscribe((response: Person[]) => {
      this.personEntityList = response
    })
  }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>("http://localhost:8080/person/all");
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>("http://localhost:8080/person/add", person)

  }

  deletePerson(personId: number): Observable<Person[]> {
    return this.http.delete<Person[]>("http://localhost:8080/person/delete/" +
      personId);
  }

  updatePerson(person: Person): Observable<Person[]> {
    return this.http.put<Person[]>("http://localhost:8080/person/update", person);
  }

  setter(person: Person) {
    this.personEntity = person;
  }

  getPersonEntity(): Person {
    return this.personEntity;
  }

  setPersonDetailEntity(peraon: Person) {
    this.personDetailEntity = peraon;
  }

  getPersonDetailEntity(): Person {
    if (this.personDetailEntity != undefined) {
      return this.personDetailEntity;

    }
    return {};

  }

  getPersonById(number: number): Observable<Person> {
    //let num=Number.parseInt(number);
    return this.http.get<Person>("http://localhost:8080/person/find/" + number);
  }

  //
  // updatePerson(updatedPerson: Person): Observable<Person> {
  //   // const url = `http://localhost:8080/person/${id}`; // Replace with your API endpoint
  //
  //   return this.http.put<Person>("http://localhost:8080/person/update/", updatedPerson)
  //
  // }
  updatePersonEntitylist() {
    this.getAll().subscribe((response: Person[]) => {
      this.personEntityList = response;

    });

  }

/* Hier wird das Pdf direkt im neuen Tab geöffnet, allerdings mit einem kryptischen Namen
  getPdfPersonenListe(): void {
    this.http.get('http://localhost:8080/person/pdf-personenliste', { responseType: 'blob' }).subscribe((response: Blob) => {
      const file = new Blob([response], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }*/

  getPdfPersonenListe(): void {
    this.http.get('http://localhost:8080/person/pdf-personenliste', { responseType: 'blob', observe: 'response' }).subscribe((response: HttpResponse<Blob>) => {
      const file = new Blob(response.body ? [response.body] : [], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);

      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = filenameRegex.exec(<string>response.headers.get('Content-Disposition'));
      const filename = matches != null && matches[1] ? matches[1].replace(/['"]/g, '') : 'Personenliste.pdf';

      const a = document.createElement('a');
      a.href = fileURL;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
    });
  }
}

