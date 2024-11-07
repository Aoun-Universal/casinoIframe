import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
    },
    {
        path: '',
        loadComponent: () => import('./components/layout/layout.component').then(c => c.LayoutComponent),
        children:[
            {
                path:'',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
},
          
        ]
    }
];  
