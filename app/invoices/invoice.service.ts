import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IInvoice } from './invoice';

@Injectable()
export class InvoiceService {
    private apiUrl = 'app/invoices';

    constructor(private http: Http) {}

    getInvoices(): Promise<IInvoice[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError);
    }

    addInvoice(invoice: IInvoice): Promise<IInvoice> {
        return this.post(invoice);
    }

    duplicateInvoice(invoice: IInvoice): Promise<IInvoice> {
        return this.duplicate(invoice);
    }


    deleteInvoice(invoice: IInvoice): Promise<IInvoice> {
        return this.delete(invoice);
    }

    private post(invoice: IInvoice): Promise<IInvoice> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl, JSON.stringify(invoice), {headers: headers})
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError)
    }

    private duplicate(invoice: IInvoice): Promise<IInvoice> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl, JSON.stringify(invoice), {headers: headers})
                        .toPromise()
                        .then(res => invoice)
                        .catch(this.handleError)
    }

    private put(invoice: IInvoice): Promise<IInvoice> {
        let url = `${this.apiUrl}/${invoice.id}`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(url, JSON.stringify(invoice), {headers: headers})
                        .toPromise()
                        .then(() => invoice)
                        .catch(this.handleError);
    }

    private delete(invoice: IInvoice): Promise<IInvoice> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let url = `${this.apiUrl}/${invoice.id}`;

        return this.http.delete(url, {headers: headers})
                        .toPromise()
                        .then(res => invoice)
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}