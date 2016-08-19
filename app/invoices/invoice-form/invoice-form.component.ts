import { Component, Output, EventEmitter } from '@angular/core';

import { Invoice } from '../invoice';

@Component({
    selector: 'invoice-form',
    templateUrl: './app/invoices/invoice-form/invoice-form.component.html',
    styleUrls: ['./app/invoices/invoice-form/invoice-form.component.css']
})

export class InvoiceFormComponent{
    @Output() added: EventEmitter<Invoice> = new EventEmitter<Invoice>();;

    add(name: string)
    {
        if(name){
            let invoice = new Invoice(name);
            this.added.emit(invoice);
        }

    }
}