import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
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
                path: '',
                loadComponent: () => import('./pages/signup/signup.component').then(c => c.SignupComponent),
            },

        ]
    }
];  
