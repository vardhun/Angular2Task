import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Invoice }           from '../invoices/invoice';

@Injectable()
export class InvoiceSearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http
               .get(`app/invoices/?name=${term}`)
               .map((r: Response) => r.json().data as Invoice[]);
  }
}