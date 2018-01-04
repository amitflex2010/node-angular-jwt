import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttonText = 'REGISTER/LOG IN';

 showLogin() {
   window.location.href = '/login';
 }
}
