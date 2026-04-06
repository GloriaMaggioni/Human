import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
private token = environment.GOREST_APIKEY;

 // controlla se token è presente
isLoggedIn(): boolean {
  return localStorage.getItem('token') !== null
}


// salvare il token nel localstorage
login(){
  return localStorage.setItem('token', this.token)
}
}
