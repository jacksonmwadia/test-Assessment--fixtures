import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    { path: 'admin', component: AdminComponent},
    { path: '', component: LandingPageComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
];
