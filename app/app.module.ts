import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { InvoiceFormComponent } from './invoices/invoice-form/invoice-form.component';
import { InvoiceItemComponent } from './invoices/invoice-item/invoice-item.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';
import { InvoiceService} from './shared/invoice.service';
import { AuthenticationService } from './shared/authentication.service';



@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule , ReactiveFormsModule],
  declarations: [ AppComponent,
  InvoicesComponent, InvoiceFormComponent, InvoiceItemComponent, InvoiceListComponent],
  providers: [
    InvoiceService,
    AuthenticationService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
