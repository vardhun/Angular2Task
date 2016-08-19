import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IInvoice } from '../invoice';
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component';

@Component({
    selector: 'invoice-list',
    templateUrl: 'app/invoices/invoice-list/invoice-list.component.html',
    styleUrls: ['app/invoices/invoice-list/invoice-list.component.css'],
    directives: [InvoiceItemComponent]
})

export class InvoiceListComponent{
    pageTitle: string = 'Invoice List';
    @Input() invoices: IInvoice[];
    @Output() deleted: EventEmitter<IInvoice> =  new EventEmitter<IInvoice>();
    @Output() duplicated: EventEmitter<IInvoice> =  new EventEmitter<IInvoice>();

    onInvoiceDeleted(invoice: IInvoice): void{
        this.deleted.emit(invoice);
    }

    onInvoiceDuplicated(invoice:IInvoice):void{
        this.duplicated.emit(invoice);
    }                     
}