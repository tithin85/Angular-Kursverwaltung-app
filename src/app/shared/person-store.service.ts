
import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Person} from "./Person";
import {BehaviorSubject, Observable} from "rxjs";
import {List} from 'immutable';

@Injectable({
  providedIn: 'root'
})

export class PersonStoreService implements OnInit{

  private personEntity:Person;
  //personList:Observable<Person[]>;
  private personDetailEntity?:Person;
  private zuordnungsPerson:Person;
 public personEntityList:Person[];




constructor(private http:HttpClient){
  //this.personList=this.getAll();
  this.personEntity={};
  //this.personDetailEntity={};
  this.zuordnungsPerson={};
  this.personEntityList=[];
   this.getAll().subscribe((response:Person[])=>{this.personEntityList=response

  })

}
ngOnInit() {

   this.getAll().subscribe((response:Person[])=>{this.personEntityList=response

  })

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
  setPersonDetailEntity(peraon:Person){
  this.personDetailEntity=peraon;
  }
  getPersonDetailEntity():Person{
  if(this.personDetailEntity!=undefined){
    return this.personDetailEntity;

  }
  return {};

  }
  getPersonById(number:number):Observable<Person>{
  //let num=Number.parseInt(number);
  return this.http.get<Person>("http://localhost:8080/person/find/"+number);
  }

  //
  // updatePerson(updatedPerson: Person): Observable<Person> {
  //   // const url = `http://localhost:8080/person/${id}`; // Replace with your API endpoint
  //
  //   return this.http.put<Person>("http://localhost:8080/person/update/", updatedPerson)
  //
  // }
  updatePersonEntitylist(){
    this.getAll().subscribe((response:Person[])=>{this.personEntityList=response;

    });

  }


}

