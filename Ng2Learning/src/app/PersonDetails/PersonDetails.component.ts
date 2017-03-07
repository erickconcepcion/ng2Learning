import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../PersonData/Person';
@Component({
  selector: 'app-PersonDetails',
  templateUrl: './PersonDetails.component.html',
  styleUrls: ['./PersonDetails.component.css']
})
export class PersonDetailsComponent implements OnInit {

  public 
  constructor() { }
  @Input()
  public selectPerson: Person;
  public showDetails: boolean;
  ngOnInit() {
    
  }

}