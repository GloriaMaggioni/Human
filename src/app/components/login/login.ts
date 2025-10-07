import { Component, Inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, Routes,  } from "@angular/router";
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
   

  // constructor(private route: Router){}


  goToRegisterPage(){
    // this.route.navigate[('/register/register.html')] //mi da errore: vedere perchè qui non funziona .Sistemare la autenticazione dei campi
  }
 

}
