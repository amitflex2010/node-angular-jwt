import { Component, OnInit  } from '@angular/core';
import { AppService} from '../service/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Register';

  private classData;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.addBookWithObservable()
    .subscribe(data => {
       this.classData = data;
       console.log(this.classData);
    },
    error => {
      console.log(error);
    });
  }
}
