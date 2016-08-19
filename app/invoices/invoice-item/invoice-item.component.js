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
var InvoiceItemComponent = (function () {
    function InvoiceItemComponent() {
        this.deleted = new core_1.EventEmitter();
        this.duplicated = new core_1.EventEmitter();
    }
    InvoiceItemComponent.prototype.delete = function () {
        this.deleted.emit(this.invoice);
    };
    InvoiceItemComponent.prototype.duplicate = function () {
        this.duplicated.emit(this.invoice);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', invoice_1.Invoice)
    ], InvoiceItemComponent.prototype, "invoice", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InvoiceItemComponent.prototype, "deleted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InvoiceItemComponent.prototype, "duplicated", void 0);
    InvoiceItemComponent = __decorate([
        core_1.Component({
            selector: 'invoice-item',
            templateUrl: './app/invoices/invoice-item/invoice-item.component.html',
            styleUrls: ['./app/invoices/invoice-item/invoice-item.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], InvoiceItemComponent);
    return InvoiceItemComponent;
}());
exports.InvoiceItemComponent = InvoiceItemComponent;
//# sourceMappingURL=invoice-item.component.js.map