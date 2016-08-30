import { Routes, RouterModule } from '@angular/router';

import { InvoicesComponent } from './invoices/invoices.component';

import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'invoices', pathMatch: 'full'},
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