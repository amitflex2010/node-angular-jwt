import { Component } from '@angular/core';
import { AlertService } from './directive/flash-message/service/flash-message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttonText = 'REGISTER/LOG IN';

  constructor(private alertService: AlertService) {

  }

 showLogin() {
  const token = localStorage.getItem('jwt-token');
  const buttonText = document.getElementById('loginBtn').textContent;
   if (buttonText === 'LOGOUT') {
    localStorage.setItem('jwt-token', '');
    localStorage.setItem('logged-user', '');
    window.location.href = '#';
    this.success('You have been successfully logged out');

   }else {
    window.location.href = '/login';
   }

 }

 success(message: string) {
  this.alertService.success(message);
}

 showUpload() {
  window.location.href = '/upload';
 }

 showGallery() {
  window.location.href = '/gallery';
 }
 showSearch() {
  window.location.href = '/search';
 }

}
