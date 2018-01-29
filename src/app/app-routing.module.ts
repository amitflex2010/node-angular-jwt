import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/app.login.component';
import {RegisterComponent} from './login/app.register.component';
import { HomeComponent } from './homepage/app.home.component';
import { DetailComponent} from './homepage/app.details.component';

import { LoginAuthGuard} from './login/app.login.authguard';
import { NotFoundComponent } from './notfound/app.component.notfound';
import { ImageUploadComponent } from './imageupload/app.component.imageupload';



const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'upload', component: ImageUploadComponent },
    { path: 'notfound', component: NotFoundComponent},
    { path: 'home', component: HomeComponent, canActivate: [LoginAuthGuard] },
    { path: 'home/item/:id', component: DetailComponent, canActivate: [LoginAuthGuard]},
    { path: '**', redirectTo: '/notfound' }
];

export const ApplicationRouting = RouterModule.forRoot(appRoutes);
