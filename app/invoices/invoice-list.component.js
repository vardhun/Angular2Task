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
var InvoiceListComponent = (function () {
    function InvoiceListComponent() {
        this.panelMargin = 15;
        this.pageTitle = 'Invoice List';
        this.invoices = [{ "id": 1, "name": "Invoice 1" },
            { "id": 2, "name": "Invoice 2" }];
    }
    InvoiceListComponent.prototype.addInvoice = function (input) {
        var invoice = { id: 3, name: input.value };
        input.value = '';
        this.invoices.push(invoice);
    };
    InvoiceListComponent = __decorate([
        core_1.Component({
            selector: 'inv-list',
            templateUrl: 'app/invoices/invoice-list.component.html',
            styleUrls: ['app/invoices/invoice-list.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());
exports.InvoiceListComponent = InvoiceListComponent;
//# sourceMappingURL=invoice-list.component.js.map