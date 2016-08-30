import { Component, OnInit } from '@angular/core';

import { IInvoice } from './invoice';
import { InvoiceService } from '../shared/invoice.service';
import { AuthenticationService } from '../shared/authentication.service';

import { InvoiceFormComponent } from '../invoices/invoice-form/invoice-form.component';
import { InvoiceListComponent } from '../invoices/invoice-list/invoice-list.component';


@Component({
    selector: 'invoices',
    templateUrl: './app/invoices/invoices.component.html',
    styleUrls: ['./app/invoices/invoices.component.css'],
    directives: [InvoiceFormComponent, InvoiceListComponent]
})
export class InvoicesComponent implements OnInit {
    invoices: IInvoice[];
    invoiceService: InvoiceService;

    constructor(invoiceService: InvoiceService, private authService: AuthenticationService) {
        this.invoices = [];
        this.invoiceService = invoiceService;
    }

   
    ngOnInit() {
        this.authService.checkCredentials();
        this.invoiceService.getInvoices().then(invoices => this.invoices = invoices);
    }

    logout() {
        this.authService.logout();
    }
    onInvoiceAdded(invoice: IInvoice): void {
        this.invoiceService.addInvoice(invoice).then(invoice => this.addInvoice(invoice));
    }

    onInvoiceDuplicated(invoice: IInvoice): void {
        this.invoiceService.duplicateInvoice(invoice).then(invoice => this.duplicateInvoice(invoice));
    }

    onInvoiceDeleted(invoice: IInvoice): void {
        this.invoiceService.deleteInvoice(invoice).then(invoice => this.deleteInvoice(invoice));
    }

    onInvoiceSearched(invoices: IInvoice[]):void{
        console.log(invoices);
        //this.invoices = invoices;
    }

    private addInvoice(invoice: IInvoice): void {
        this.invoices.push(invoice);
    }

     private duplicateInvoice(invoice: IInvoice): void {
        this.invoices.push(invoice);
    }

    private deleteInvoice(invoice: IInvoice): void {
        let index = this.invoices.indexOf(invoice);

        if (index > -1) {
            this.invoices.splice(index, 1);
        }
    }
}