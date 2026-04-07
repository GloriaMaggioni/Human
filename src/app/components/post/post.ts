import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject,  OnInit, output, Output, ViewChild } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { PostService } from '../../services/post-service';
import {    FormsModule, NgForm } from '@angular/forms';
import { EventEmitter } from 'node:stream';
import { SnackBar } from '../../services/snack-bar';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-post',
  imports: [ FormsModule, ],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post  {
  private service = inject(PostService);
  private cdr = inject(ChangeDetectorRef);
  private snackBar = inject(SnackBar);
  private authService = inject(AuthService);

  private userId : number = this.authService.getUserId();   

   @ViewChild('newPostForm') postForm! : NgForm
    postCreated = output<void>();       // event emitter



  newPost : PostModel = {       // inizializza i dati del post 
    user_id: this.userId,
    title: '',
    body: '',
    comment : []
  };
 

 
   createNewPost(){
    if(this.postForm.valid){
        this.service.createPost(this.newPost, this.userId). subscribe({         
     next : (data: any) =>{
      this.newPost = data;
      this.postCreated.emit();
      this.postForm.reset();
      this.cdr.detectChanges();
       console.log('Dati del nuovo post inviati', data);
       console.log('DATI DAL POST FORM:', this.newPost)
     },
     error : (err : any) =>  this.snackBar.openSnackBar('Errore nel creare il nuovo post:', err)
    })

    }

    
 }

 

}
