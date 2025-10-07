import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterModule,],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
    private route = Inject(ActivatedRoute);
  form  = new FormGroup({
    firstName : new FormControl('', [Validators.required]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl ('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])

  })
 private router = Inject (Router);

 
  goToDashboard(){    //NON FUNZIONA: CAPIRE CHE COSA È SBAGLIATO
    if(this.form.valid){
          this.router.navigate[('/dashboard/dashboard.html')]
          console.log(this.form.value)

    }else if(this.form.invalid){                   //APPARE ANCHE SE GLI INPUT SONO COMPILATI TUTTI E CORRETTAMENTE
      alert('Compilare tutti i campi obbligatori') 
    }
  }
}
