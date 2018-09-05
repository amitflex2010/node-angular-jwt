import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './app.component-notfound.html',
  styleUrls: ['./app.component-demo.css']
})
export class NotFoundComponent implements OnInit {
  title = 'Page Not Found.';

  private classData;
  constructor() { }

  ngOnInit() {

  }
}
