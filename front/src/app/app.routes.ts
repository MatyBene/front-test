import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { LoginPage } from './pages/login-page/login-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { guestGuard } from './guards/guest-guard';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'login', component: LoginPage, canActivate: [guestGuard]},


    {path: 'members/profile', component: ProfilePage}
];
