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
  const token = localStorage.getItem('jwt-token');
  const buttonText = document.getElementById('loginBtn').textContent;
   if (buttonText === 'LOGOUT') {
    localStorage.setItem('jwt-token', '');
    localStorage.setItem('logged-user', '');
    window.location.href = '#';
   }else {
    window.location.href = '/login';
   }

 }

 showUpload() {
  window.location.href = '/upload';
 }

 showGallery() {
  window.location.href = '/gallery';
 }

}
