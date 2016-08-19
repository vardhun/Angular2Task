import { Component, OnInit } from '@angular/core';

import { IInvoice } from './invoice';
import { InvoiceService } from './invoice.service';

import { InvoiceFormComponent } from '../invoices/invoice-form/invoice-form.component';
import { InvoiceSearchComponent } from '../invoices/invoice-search/invoice-search.component';
import { InvoiceListComponent } from '../invoices/invoice-list/invoice-list.component';


@Component({
    selector: 'invoices',
    templateUrl: './app/invoices/invoices.component.html',
    styleUrls: ['./app/invoices/invoices.component.css'],
    directives: [InvoiceFormComponent, InvoiceSearchComponent, InvoiceListComponent]
})
export class InvoicesComponent implements OnInit {
    invoices: IInvoice[];
    invoiceService: InvoiceService;

    constructor(invoiceService: InvoiceService) {
        this.invoices = [];
        this.invoiceService = invoiceService;
    }

    ngOnInit() {
        this.invoiceService.getInvoices().then(invoices => this.invoices = invoices);
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

    inInvoiceSearched(invoices: IInvoice[]):void{
        this.invoices = invoices;
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