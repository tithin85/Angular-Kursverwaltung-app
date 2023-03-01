
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Person} from "./Person";
import {BehaviorSubject, Observable} from "rxjs";
import {List} from 'immutable';

@Injectable({
  providedIn: 'root'
})

export class PersonStoreService{

  private personEntity:Person;
  personList:Observable<Person[]>;


constructor(private http:HttpClient){
  this.personList=this.getAll();
  this.personEntity={};
}
  getAll():Observable<Person[]>{
    return this.http.get<Person[]>("http://localhost:8080/person/all");
  }
  addPerson(person:Person):Observable<Person>{
  return this.http.post<Person>("http://localhost:8080/person/add",person)

  }
  deletePerson(personId:number):Observable<Person[]>{
   return this.http.delete<Person[]>("http://localhost:8080/person/delete/" +
     personId);
  }
  updatePerson(person:Person):Observable<Person[]>{
  return this.http.put<Person[]>("http://localhost:8080/person/update",person);
  }
  setter(person:Person){
  this.personEntity=person;
  }
  getPersonEntity():Person{
  return this.personEntity;
  }

}

