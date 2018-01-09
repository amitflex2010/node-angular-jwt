import { Component, OnInit  } from '@angular/core';
import { AppService} from '../service/app.service';

@Component({
  selector: 'app-demo',
  templateUrl: './app.details.component.html',
  styleUrls: ['./app.details.component.css']
})
export class DetailComponent implements OnInit {
  title = 'Demo';

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
