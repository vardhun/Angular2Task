"use strict";
var router_1 = require('@angular/router');
var invoices_component_1 = require('./invoices/invoices.component');
var login_component_1 = require('./login/login.component');
var appRoutes = [
    {
        path: 'invoices',
        component: invoices_component_1.InvoicesComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map