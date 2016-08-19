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
var invoice_1 = require('../invoice');
var InvoiceFormComponent = (function () {
    function InvoiceFormComponent() {
        this.added = new core_1.EventEmitter();
    }
    ;
    InvoiceFormComponent.prototype.add = function (name) {
        if (name) {
            var invoice = new invoice_1.Invoice(name);
            this.added.emit(invoice);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InvoiceFormComponent.prototype, "added", void 0);
    InvoiceFormComponent = __decorate([
        core_1.Component({
            selector: 'invoice-form',
            templateUrl: './app/invoices/invoice-form/invoice-form.component.html',
            styleUrls: ['./app/invoices/invoice-form/invoice-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], InvoiceFormComponent);
    return InvoiceFormComponent;
}());
exports.InvoiceFormComponent = InvoiceFormComponent;
//# sourceMappingURL=invoice-form.component.js.map