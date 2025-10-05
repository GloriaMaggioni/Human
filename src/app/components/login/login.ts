import { Component } from '@angular/core';
import { RouterLink, RouterModule, Routes } from "@angular/router";
import{FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms"
@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 

  constructor(){}
 

}
