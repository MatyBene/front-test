import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { LoginPage } from './pages/login-page/login-page';
import { ProfilePage } from './pages/profile-page/profile-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'login', component: LoginPage},

    
    {path: 'members/profile', component: ProfilePage}
];
