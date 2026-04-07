import { Component, inject, Inject } from '@angular/core';
import {  RouterModule, Router,  } from "@angular/router";
import{ FormsModule, NgForm, ReactiveFormsModule, } from "@angular/forms"
import { AuthService } from '../../auth/auth-service';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgClass
],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

onSubmit(loginForm : NgForm){
  const email = loginForm.value.email;
  const password = loginForm.value.password;
  this.authService.login()
   this.router.navigate(['homepage'])
   
}

}
