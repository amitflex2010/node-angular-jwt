import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppService } from './service/app.service';
import { LoginService} from './login/app.login.service';
import { HomeService } from './homepage/app.home.service';
import { DynamicComponentLoader } from './homepage/app.dynamiccomponentloader.component';

import { LoginAuthGuard} from './login/app.login.authguard';

import { DialogComponent } from './directive/dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DialogComponent,
    DynamicComponent,
    TechnologyComponent,
    ArticleComponent,
    BannerComponent,
    DetailComponent,
    NotFoundComponent,
    ImageUploadComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    ApplicationRouting,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [AppService, LoginService, LoginAuthGuard, HomeService, DynamicComponentLoader],
  bootstrap: [AppComponent],
  entryComponents: [DynamicComponent, TechnologyComponent, ArticleComponent]
})
export class AppModule { }
