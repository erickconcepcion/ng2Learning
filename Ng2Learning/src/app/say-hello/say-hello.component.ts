import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent implements OnInit {
  public name
  constructor() {
    this.name = 'Max'
  }
  sayMyName() {
    console.log('My name is', this.name)
  }

  ngOnInit() {
  }

}
