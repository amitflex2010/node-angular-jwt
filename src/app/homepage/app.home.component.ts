import { Component, OnInit, AfterViewInit, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import { HomeService} from './app.home.service';
import { DynamicComponentLoader } from './app.dynamiccomponentloader.component';
import { BannerComponent } from './banner/banner.component';
import { PostItem } from './banner/banner.post-item';


@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
  styleUrls: ['./app.home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'home';

  private responseData;
  postItems: PostItem[];
  intervalId: any;
  postIndex = -1;

  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  @ViewChild(BannerComponent)
  private bannerComponent: BannerComponent;

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
      this.renderNow((resdata.widget));
      console.log(resdata.widget.header);
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
    this.postItems = this.componentLoader.getAllPosts();
    this.startPostHighlights();
  }

  startPostHighlights() {
    this.intervalId = setInterval(() => {
    this.postIndex = (this.postIndex === this.postItems.length - 1) ? 0 : this.postIndex + 1;

  // Use viewContainerRef from Component
  this.componentLoader.loadComponent(this.bannerComponent.viewContainerRef, this.postItems[this.postIndex]);

      }, 2000);
  }

 ngOnDestroy() {
    clearInterval(this.intervalId);
 }
}
