import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef,inject,signal } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { UsersService } from '../../services/users-service';
import { User } from '../../models/users';
import { Event } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';




@Component({
  selector: 'app-navbar',
  imports: [MatMenuModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  private userService = inject(UsersService)


  // da sistemare per renderlo funzionante e dinamico
userImgPanel = [  // TODO: vedere che cosa è e se serve
  {image : 'Immagine'},
  { nome: 'Nome'},
  {cognome: 'Cognome'},
  { profilo: '/components/single-utent-page.html'}
]
  newUser : User = {   // inizializzato i parametri del model: campi obbligatori
    name: '',
    email: '',
    gender: '',
    status: 'active'      
  }
   

isOpen = false;
isCreate = signal(false);
testoDigitato: string = ''; // prende il testo digitato nella search bar (newText)

createPost() {
  this.isOpen = !this.isOpen;
  if(this.isCreate() == true){
    this.isOpen =  false;
  }
}
 
// apre/chiude il modal per creare il nuovo user
 openNewUserForm(){
     this.isCreate.update(open => !open);
      if(this.isOpen == true){
     this.isCreate.set(false);
 
     this.addUserClick()

  }
   this.cleanForm()
    

 }

// add i dati del nuovo user
 addUserClick(){
  this.userService.addUser( this.newUser).subscribe({
    next: (data: any) =>{
      // this.userService.getUser();
      const currentUser = this.userService.users$.getValue();
     currentUser.push(data);
      this.userService.users$.next(currentUser)
      console.log('Dati da addUserClick', data)
    } ,
    error: (err: any) => console.error('Errore nel creare il nuovo user', err)    
  })
 }

 // resetta il form per creare il nuovo user
cleanForm(){
   this.newUser = {
    name: '',
    email: '',
    gender: '',
    status: 'active'
  }
 
}

// metodo che prende il nuovo testo digitato nella search bar e aggiorna i dati
findUser(newText: string){
 this.userService.searchUser.next(newText)

}

   
}
