import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/app.login.component';
import {RegisterComponent} from './login/app.register.component';
import { HomeComponent } from './homepage/app.home.component';

import { LoginAuthGuard} from './login/app.login.authguard';



const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard] },
   { path: 'register', component: RegisterComponent },
   { path: 'home', component: HomeComponent },
   { path: '**', redirectTo: '/' }
];

export const ApplicationRouting = RouterModule.forRoot(appRoutes);
