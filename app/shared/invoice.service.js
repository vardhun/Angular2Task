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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var InvoiceService = (function () {
    function InvoiceService(http) {
        this.http = http;
        this.apiUrl = 'app/invoices';
    }
    InvoiceService.prototype.getInvoices = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    InvoiceService.prototype.addInvoice = function (invoice) {
        return this.post(invoice);
    };
    InvoiceService.prototype.duplicateInvoice = function (invoice) {
        return this.duplicate(invoice);
    };
    InvoiceService.prototype.deleteInvoice = function (invoice) {
        return this.delete(invoice);
    };
    InvoiceService.prototype.post = function (invoice) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl, JSON.stringify(invoice), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    InvoiceService.prototype.duplicate = function (invoice) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl, JSON.stringify(invoice), { headers: headers })
            .toPromise()
            .then(function (res) { return invoice; })
            .catch(this.handleError);
    };
    InvoiceService.prototype.put = function (invoice) {
        var url = this.apiUrl + "/" + invoice.id;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put(url, JSON.stringify(invoice), { headers: headers })
            .toPromise()
            .then(function () { return invoice; })
            .catch(this.handleError);
    };
    InvoiceService.prototype.delete = function (invoice) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var url = this.apiUrl + "/" + invoice.id;
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .then(function (res) { return invoice; })
            .catch(this.handleError);
    };
    InvoiceService.prototype.handleError = function (error) {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    InvoiceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], InvoiceService);
    return InvoiceService;
}());
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map