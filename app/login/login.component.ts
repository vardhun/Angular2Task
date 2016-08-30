import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, User } from '../shared/authentication.service';


@Component ({
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent{
    
    public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}