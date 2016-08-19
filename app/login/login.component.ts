import { Component } from '@angular/core';


@Component ({
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent{
    public pageTitle: string = "Welcome";
    logForm(value: any) {
    console.log(value);
  }
}