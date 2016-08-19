import { Component } from '@angular/core';
//import { InvoiceListComponent } from './invoices/invoice-list.component';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class=container-fluid>
                    <a class='navbar-brand'>{{title}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a routerLink="/invoices" routerLinkActive="active">Invoice List</a></li>
                        <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
                    </ul>                    
                </div>
            </nav>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>

    `//,
    //directives: [InvoiceListComponent]
})
export class AppComponent {
    title: string = 'Angular 2 Test Project';
 }
