import { Component, OnInit  } from '@angular/core';
import { AppService} from '../service/app.service';

@Component({
  selector: 'app-demo',
  templateUrl: './app.component-demo.html',
  styleUrls: ['./app.component-demo.css']
})
export class DemoComponent implements OnInit {
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
