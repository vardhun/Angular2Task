import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../invoice';

@Component({
    selector: 'invoice-item',
    templateUrl: './app/invoices/invoice-item/invoice-item.component.html',
    styleUrls: ['./app/invoices/invoice-item/invoice-item.component.css']
})

export class InvoiceItemComponent{
    @Input() invoice: Invoice;
    @Output() deleted: EventEmitter<Invoice> = new EventEmitter<Invoice>();
    @Output() duplicated: EventEmitter<Invoice> = new EventEmitter<Invoice>();

    delete(){
        this.deleted.emit(this.invoice);
    }

    duplicate(){
        this.duplicated.emit(this.invoice);
    }
}