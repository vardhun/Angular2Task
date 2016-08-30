"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var invoice_item_component_1 = require('../invoice-item/invoice-item.component');
var invoice_search_service_1 = require('../../shared/invoice-search.service');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var InvoiceListComponent = (function () {
    function InvoiceListComponent(invoiceSearchService) {
        this.invoiceSearchService = invoiceSearchService;
        this.pageTitle = 'Invoice List';
        this.deleted = new core_1.EventEmitter();
        this.duplicated = new core_1.EventEmitter();
        this.searchTerms = new Subject_1.Subject();
    }
    InvoiceListComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    InvoiceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.invoices = 
        this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.invoiceSearchService.search(term)
            : Observable_1.Observable.of([]); }).subscribe(function (res) { return _this.invoices = res; }); //.toPromise().then(response => response.json().data as IInvoice[])
        //.catch(error => {
        // TODO: real error handling
        //  console.log(error);
        //  return Observable.of<Invoice[]>([]);
        //});
    };
    InvoiceListComponent.prototype.onInvoiceDeleted = function (invoice) {
        this.deleted.emit(invoice);
    };
    InvoiceListComponent.prototype.onInvoiceDuplicated = function (invoice) {
        this.duplicated.emit(invoice);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], InvoiceListComponent.prototype, "invoices", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InvoiceListComponent.prototype, "deleted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InvoiceListComponent.prototype, "duplicated", void 0);
    InvoiceListComponent = __decorate([
        core_1.Component({
            selector: 'invoice-list',
            templateUrl: 'app/invoices/invoice-list/invoice-list.component.html',
            styleUrls: ['app/invoices/invoice-list/invoice-list.component.css'],
            directives: [invoice_item_component_1.InvoiceItemComponent],
            providers: [invoice_search_service_1.InvoiceSearchService]
        }), 
        __metadata('design:paramtypes', [invoice_search_service_1.InvoiceSearchService])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());
exports.InvoiceListComponent = InvoiceListComponent;
//# sourceMappingURL=invoice-list.component.js.map