import { Component, OnInit, AfterViewInit, ViewContainerRef, ViewChild,  } from '@angular/core';
import { HomeService} from './app.home.service';
import { DynamicComponentLoader } from './app.dynamiccomponentloader.component';


@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
  styleUrls: ['./app.home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'home';

  private responseData;

  @ViewChild('dynamic', {
    read: ViewContainerRef
  })

  viewContainerRef: ViewContainerRef;

  constructor(private homeService: HomeService, private componentLoader: DynamicComponentLoader,
  viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
    document.getElementById('loginBtn').textContent = 'LOGOUT';
    this.homeService.getAll()
    .subscribe(data => {
      this.responseData = data;
      const resdata = this.responseData.data;
      this.renderNow(JSON.stringify(resdata.widget));
    },
    error => {
      console.log(error);
    });

  }

  renderNow(data) {
    this.componentLoader.setRootViewContainerRef(this.viewContainerRef);
    this.componentLoader.addDynamicComponent(data);
  }

  ngAfterViewInit() {
  }
}
