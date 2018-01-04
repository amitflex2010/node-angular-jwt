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
import { AppService } from './service/app.service';
import { LoginService} from './login/app.login.service';
import { HomeService } from './homepage/app.home.service';

import { LoginAuthGuard} from './login/app.login.authguard';
import { DialogComponent } from './directive/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    ApplicationRouting,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [AppService, LoginService, LoginAuthGuard, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
