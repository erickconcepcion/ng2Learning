import { Component, OnInit, trigger,  state,  style,  transition,  animate} from '@angular/core';
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
  public registering: boolean;
  public personForm = this.fb.group({
    FirstName: [''], 
    LastName: [''],
    Age: [0],
    About: ['']
  });
  public showClose: boolean;
  public showPlus: boolean;
  public toolTip: string;
  private addPerson: Person;
  constructor(private fb: FormBuilder, private personDataService: PersonDataService) {
    personDataService.getPersons().subscribe(persons => {
      this.persons = persons
    });
    this.evalShowDetails();
    this.showClose = false;
    this.showPlus = true;
    this.toolTip = `<h1>hello</h1>`
   }

  registerPerson(event: any) {
    this.registering = true;
    console.log(this.personForm.value);
    this.persons.unshift(this.personForm.value);
    this.personForm.reset();
    this.registering = false;
  }
  selectPerson(newPerson: Person) {
    this.selectedPerson = newPerson;
    this.evalShowDetails();
    console.log(newPerson, this.selectedPerson)
  }


  evalShowDetails(){
    this.showDetails = this.selectedPerson !== undefined;
  }

  toggleForm(): void {
    this.showClose = !this.showClose;
    this.showPlus = !this.showPlus;
  }
  ngOnInit() {
  }

}