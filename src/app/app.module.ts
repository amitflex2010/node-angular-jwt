import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationRouting } from './app-routing.module';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/app.component.demo';
import { LoginComponent} from './login/app.login.component';
import { RegisterComponent} from './login/app.register.component';
import { HomeComponent } from './homepage/app.home.component';
import { DynamicComponent} from './homepage/app.dynamic.component';
import { TechnologyComponent } from './homepage/banner/banner.technology.component';
import { ArticleComponent } from './homepage/banner/banner.article.component';
import { BannerComponent } from './homepage/banner/banner.component';
import { DetailComponent } from './homepage/app.details.component';
import { NotFoundComponent } from './notfound/app.component.notfound';
import { ImageUploadComponent } from './imageupload/app.component.imageupload';
import { SearchComponent } from './search/search.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppService } from './service/app.service';
import { LoginService} from './login/app.login.service';
import { HomeService } from './homepage/app.home.service';
import { SearchService } from './search/search.service';
import { DynamicComponentLoader } from './homepage/app.dynamiccomponentloader.component';

import { LoginAuthGuard} from './login/app.login.authguard';

import { DialogComponent } from './directive/dialog/dialog.component';
import { StarRatingComponent } from './directive/star-rating/star-rating.component';
import { AlertComponent } from './directive/flash-message/flash-message.component';
import { AlertService } from './directive/flash-message/service/flash-message.service';




@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DialogComponent,
    StarRatingComponent,
    DynamicComponent,
    TechnologyComponent,
    ArticleComponent,
    BannerComponent,
    DetailComponent,
    NotFoundComponent,
    ImageUploadComponent,
    SearchComponent,
    FileSelectDirective,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ApplicationRouting,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [AppService, LoginService, LoginAuthGuard, HomeService, DynamicComponentLoader, SearchService,
    AlertService],
  bootstrap: [AppComponent],
  entryComponents: [DynamicComponent, TechnologyComponent, ArticleComponent]
})
export class AppModule { }
