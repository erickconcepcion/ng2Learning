import { Component } from '@angular/core';
import{ User } from './MyComponent/User'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user: User

  constructor() {
    this.user = {
      UserName: 'Erick',
      Password: 'Abcd.1234',
      AboutMe: 'Im so hot'
    };
  }
}
