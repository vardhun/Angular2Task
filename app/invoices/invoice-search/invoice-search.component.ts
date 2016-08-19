import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { Http } from '@angular/http';

import { InvoiceSearchService } from '../invoice-search/invoice-search.service';
import { Invoice } from '../invoice';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'invoice-search',
  templateUrl: 'app/invoices/invoice-search/invoice-search.component.html',
  styleUrls:  ['app/invoices/invoice-search/invoice-search.component.css'],
  providers: [InvoiceSearchService]
})


export class InvoiceSearchComponent implements OnInit {
   @Output() searched: EventEmitter<Invoice[]> = new EventEmitter<Invoice[]>();

  invoices: Observable<Invoice[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private invoiceSearchService: InvoiceSearchService,
    private router: Router) {}


  search(term: string) { 
    this.searchTerms.next(term); 
  }

  ngOnInit() {
    this.invoices = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.invoiceSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Invoice[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Invoice[]>([]);
      });
  }

}