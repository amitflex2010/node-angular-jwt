import { Component, OnInit  } from '@angular/core';
import { HomeService} from './app.home.service';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
  styleUrls: ['./app.home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';

  private responseData;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    document.getElementById('loginBtn').textContent = 'LOGOUT';
    this.homeService.getAll()
    .subscribe(data => {
       this.responseData = data;
       console.log(this.responseData);
       console.log('here');
    },
    error => {
      console.log(error);
    });
  }
}
