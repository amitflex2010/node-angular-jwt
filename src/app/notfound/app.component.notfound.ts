import { Component, OnInit  } from '@angular/core';
import { AlertService } from '../directive/flash-message/service/flash-message.service';



@Component({
  selector: 'app-demo',
  templateUrl: './app.component-notfound.html',
  styleUrls: ['./app.component-demo.css']
})
export class NotFoundComponent implements OnInit {
  title = 'Page Not Found.';

  private classData;
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.error('Path Not Found');
    }

  error(message: string) {
      this.alertService.error(message);

  }
}
