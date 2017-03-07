import { Component, OnInit, Input } from '@angular/core';
import { User } from './User';
@Component({
  selector: 'app-MyComponent',
  templateUrl: './MyComponent.component.html',
  styleUrls: ['./MyComponent.component.css']
})
export class MyComponentComponent implements OnInit {
  @Input()
  public User: User;
  constructor() { }
  
  ngOnInit() {
  }

}