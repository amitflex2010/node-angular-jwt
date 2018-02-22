import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService} from './app.login.service';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  showDialog = false;
  showWronPwdAlert = false;
  form: FormGroup;
  frmbuilder: FormBuilder;
  bookingCode: string;
  error = {
  statusCode: 404,
  message: 'Booking code does not exist.'
  };

 constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private loginService: LoginService) {
     this.frmbuilder = fb;
}

ngOnInit() {
this.showDialog = !this.showDialog;
this.createForm();
}

/**
* Create and initialize the form model with required
* validation.
* @memberof LoginComponent
*/

createForm() {
 this.form = this.frmbuilder.group({
     username: ['',  [Validators.required,
                         Validators.minLength(5),
                         Validators.maxLength(6),
                         Validators.pattern('^[a-zA-Z2-9]+$')]],
     password: ['',   [Validators.required,
                         Validators.minLength(2),
                         Validators.maxLength(30),
                         Validators.pattern('^[a-zA-Z]+$')]]
     });
}

/**
* Submit the form and call getBookings with bookingcode.
* @param {any}
* @memberof LoginComponent
*/

onSubmit() {
  this.getBookings(this.form.value);
}

/**
* Retrive the Booking details and handle error if any
* @param {any} bookingCode
* @memberof LoginComponent
*/

getBookings(loginData) {

     this.loginService.doLogin(loginData).
     subscribe( data => {

     if ((data.success) === true) {
      this.showWronPwdAlert = false;
      localStorage.setItem('jwt-token', data.token);
      localStorage.setItem('logged-user', data.user);
       this.router.navigate(['/home'],
       {
           queryParams: {username: loginData.username}, relativeTo: this.route });
     }else {
      this.showWronPwdAlert = true;
     }
   },
   error => {
     console.log(error);
     this.form.reset();
   }
 );
}

/**
* To check passed control is valid
* @param {FormControl} control
* @memberof LoginComponent
*/

isValid(control) {
      return this.form.controls[control].invalid && this.form.controls[control].touched;
 }
}
