import { Routes, RouterModule } from '@angular/router';

import { InvoicesComponent } from './invoices/invoices.component';

import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    {
        path: 'invoices',
        component: InvoicesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);