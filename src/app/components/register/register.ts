import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterModule, ɵInternalFormsSharedModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  // https://gorest.co.in/public/v2/users?access-token=xxx
registerForm: any;
onSubmit(form: NgForm) {
  console.log(form)
}

}
