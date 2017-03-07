import { Component, OnInit, } from '@angular/core';
import { Person } from './Person';
import {FormBuilder} from '@angular/forms'
import {PersonDataService} from './PersonData.service';
@Component({
  selector: 'app-PersonData',
  templateUrl: './PersonData.component.html',
  styleUrls: ['./PersonData.component.css']
})
export class PersonDataComponent implements OnInit {
  public persons: Person[];
  public selectedPerson: Person;
  public showDetails: boolean;
  public personForm = this.fb.group({
    Name: [''], 
    LastName: [''],
    Age: [0],
    About: ['']
  });
  private addPerson: Person;
  constructor(private fb: FormBuilder, private personDataService: PersonDataService) {
    this.persons = personDataService.getPersons();
    this.evalShowDetails();
    
   }

  registerPerson(event: any) {
    console.log(this.personForm.value);
    this.persons.unshift(this.personForm.value);
  }
  selectPerson(newPerson: Person) {
    this.selectedPerson = newPerson;
    this.evalShowDetails();
    console.log(newPerson, this.selectedPerson)
  }


  evalShowDetails(){
    this.showDetails = this.selectedPerson !== undefined;
  }
  ngOnInit() {
  }

}