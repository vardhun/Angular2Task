import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInvoice } from '../invoice';
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component';
import { InvoiceSearchService } from '../../shared/invoice-search.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Invoice } from '../invoice';

@Component({
    selector: 'invoice-list',
    templateUrl: 'app/invoices/invoice-list/invoice-list.component.html',
    styleUrls: ['app/invoices/invoice-list/invoice-list.component.css'],
    directives: [InvoiceItemComponent],
     providers: [InvoiceSearchService]
})

export class InvoiceListComponent implements OnInit{
    pageTitle: string = 'Invoice List';
    @Input() invoices: IInvoice[];
    @Output() deleted: EventEmitter<IInvoice> =  new EventEmitter<IInvoice>();
    @Output() duplicated: EventEmitter<IInvoice> =  new EventEmitter<IInvoice>();

    private searchTerms = new Subject<string>();

  constructor(
    private invoiceSearchService: InvoiceSearchService) {}


  search(term: string):void { 
    this.searchTerms.next(term); 
  }

  ngOnInit() {
    //this.invoices = 
    this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.invoiceSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<IInvoice[]>([])).subscribe(res => this.invoices= res);//.toPromise().then(response => response.json().data as IInvoice[])
      //.catch(error => {
        // TODO: real error handling
      //  console.log(error);
      //  return Observable.of<Invoice[]>([]);
      //});
  }

    onInvoiceDeleted(invoice: IInvoice): void{
        this.deleted.emit(invoice);
    }

    onInvoiceDuplicated(invoice:IInvoice):void{
        this.duplicated.emit(invoice);
    }                     
}