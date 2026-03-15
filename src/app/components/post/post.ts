import { Component, inject, OnInit } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { PostService } from '../../services/post-service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post  {
  private service = inject(PostService)

  private userId : string = "Id utente creata dall'autenticazione"    // TODO: COLLEGARE L'USERID ALLA AUTENTICAZIONE QUANDO VERRA' CREATA
   
newPostForm = new  FormGroup({
     userName : new FormControl ('', Validators.required),
     image: new FormControl(''),
     postDescription: new FormControl('', Validators.required)
});

  newPost : PostModel = {       // inizializza i dati del post 
    name: '',
    data: '',
    description: '',
    comment : []
  };
 

 
   addNewPostClick(){
   this.service.createPost(this.newPost, this.userId). subscribe({         // userId provvisorio ---> collegarla all'autenticazione
    next : (data: any) =>{
      // console.log('Dati del nuovo post:', data)
      console.log('Dati del nuovo post inviati')
    },
    error : (err : any) =>{       
      console.error('Errore nel creare il nuovo post:', err)
     }
   })

   this.cleanForm()
 }

 // resetta il form
 cleanForm(){   //TODO: VEDERE DOVE VA ATTACCATO PER RESETTARE IL FORM
  this.newPost = {
    name: '',
    data: '',
    description: '',
    comment : []

  }
 }

}
