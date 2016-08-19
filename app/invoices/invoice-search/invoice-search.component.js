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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var invoice_search_service_1 = require('../invoice-search/invoice-search.service');
require('rxjs/add/operator/toPromise');
var InvoiceSearchComponent = (function () {
    function InvoiceSearchComponent(invoiceSearchService, router) {
        this.invoiceSearchService = invoiceSearchService;
        this.router = router;
        this.searched = new core_1.EventEmitter();
        this.searchTerms = new Subject_1.Subject();
    }
    InvoiceSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    InvoiceSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invoices = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.invoiceSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InvoiceSearchComponent.prototype, "searched", void 0);
    InvoiceSearchComponent = __decorate([
        core_1.Component({
            selector: 'invoice-search',
            templateUrl: 'app/invoices/invoice-search/invoice-search.component.html',
            styleUrls: ['app/invoices/invoice-search/invoice-search.component.css'],
            providers: [invoice_search_service_1.InvoiceSearchService]
        }), 
        __metadata('design:paramtypes', [invoice_search_service_1.InvoiceSearchService, router_1.Router])
    ], InvoiceSearchComponent);
    return InvoiceSearchComponent;
}());
exports.InvoiceSearchComponent = InvoiceSearchComponent;
//# sourceMappingURL=invoice-search.component.js.map