
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Person} from "./Person";

@Injectable({
  providedIn: 'root'
})

export class PersonStoreService{

constructor(private http:HttpClient){
}
  getAll(){
    return this.http.get("http://localhost:8080/person/all");
  }
  addPerson(person:Person){
  return this.http.post("http://localhost:8080/person/add",person)
  }

}

