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
var invoice_service_1 = require('../shared/invoice.service');
var authentication_service_1 = require('../shared/authentication.service');
var invoice_form_component_1 = require('../invoices/invoice-form/invoice-form.component');
var invoice_list_component_1 = require('../invoices/invoice-list/invoice-list.component');
var InvoicesComponent = (function () {
    function InvoicesComponent(invoiceService, authService) {
        this.authService = authService;
        this.invoices = [];
        this.invoiceService = invoiceService;
    }
    InvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.checkCredentials();
        this.invoiceService.getInvoices().then(function (invoices) { return _this.invoices = invoices; });
    };
    InvoicesComponent.prototype.logout = function () {
        this.authService.logout();
    };
    InvoicesComponent.prototype.onInvoiceAdded = function (invoice) {
        var _this = this;
        this.invoiceService.addInvoice(invoice).then(function (invoice) { return _this.addInvoice(invoice); });
    };
    InvoicesComponent.prototype.onInvoiceDuplicated = function (invoice) {
        var _this = this;
        this.invoiceService.duplicateInvoice(invoice).then(function (invoice) { return _this.duplicateInvoice(invoice); });
    };
    InvoicesComponent.prototype.onInvoiceDeleted = function (invoice) {
        var _this = this;
        this.invoiceService.deleteInvoice(invoice).then(function (invoice) { return _this.deleteInvoice(invoice); });
    };
    InvoicesComponent.prototype.onInvoiceSearched = function (invoices) {
        console.log(invoices);
        //this.invoices = invoices;
    };
    InvoicesComponent.prototype.addInvoice = function (invoice) {
        this.invoices.push(invoice);
    };
    InvoicesComponent.prototype.duplicateInvoice = function (invoice) {
        this.invoices.push(invoice);
    };
    InvoicesComponent.prototype.deleteInvoice = function (invoice) {
        var index = this.invoices.indexOf(invoice);
        if (index > -1) {
            this.invoices.splice(index, 1);
        }
    };
    InvoicesComponent = __decorate([
        core_1.Component({
            selector: 'invoices',
            templateUrl: './app/invoices/invoices.component.html',
            styleUrls: ['./app/invoices/invoices.component.css'],
            directives: [invoice_form_component_1.InvoiceFormComponent, invoice_list_component_1.InvoiceListComponent]
        }), 
        __metadata('design:paramtypes', [invoice_service_1.InvoiceService, authentication_service_1.AuthenticationService])
    ], InvoicesComponent);
    return InvoicesComponent;
}());
exports.InvoicesComponent = InvoicesComponent;
//# sourceMappingURL=invoices.component.js.map