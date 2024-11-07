import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'before-login',
        pathMatch: 'full'
    },
    {
        path: '',
        loadComponent: () => import('./components/layout/layout.component').then(c => c.LayoutComponent),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
            },

            {
                path: 'before-login',
                loadComponent: () => import('./pages/signup/signup.component').then(c => c.SignupComponent),
            },

        ]
    }
];  
