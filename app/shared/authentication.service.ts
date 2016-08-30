import {Injectable} from '@angular/core';
//import { Http, Headers } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin','111'),
  new User('user','222')
];

@Injectable()
export class AuthenticationService {
 constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }
 
  login(user: User){
    var authenticatedUser: User = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['/invoices']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['/login']);
    }
  } 
}