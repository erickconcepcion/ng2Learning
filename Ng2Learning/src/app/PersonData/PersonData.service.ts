import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {Person} from './Person';
import {AppConfig} from '../AppConfig'
@Injectable()
export class PersonDataService {

    constructor(private http: Http) { 
        
    }

  getPerson () {

  }

  getPersons(): Observable<Person[]> {

    var keyword = 'person';
    var result: Observable<Person[]> = this.http.get(AppConfig.Endpoints(0).Person[keyword].Url)
      .map(res => res.json())/*result = people this.people = people*/;
    return result;/*[
      {
        Id: 1,
        Name: 'Erick',
        LastName: 'Concepcion',
        Age: 23,
        About: 'Im a Developer'
      },
      {
        Id: 2,
        Name: 'Nicole',
        LastName: 'Concepcion',
        Age: 25,
        About: 'Im a Economist'
      },
      {
        Id: 3,
        Name: 'Alberto',
        LastName: 'Concepcion',
        Age: 66,
        About: 'Im a Lawyer'
      },
      {
        Id: 4,
        Name: 'Yaquelin',
        LastName: 'Saldivar',
        Age: 51,
        About: 'Im the best Mom'
      }
    ];*/
  }

  deletePerson() {

  }

  addPerson() {

  }

  updatePerson() {
    
  }

}

