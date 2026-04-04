import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { PostService } from '../../services/post-service';
import { AsyncPipe } from '@angular/common';
import { SnackBar } from '../../services/snack-bar';
import { ChangeDetectorRef } from '@angular/core';
import { Paginator } from "../paginator/paginator";
import { CommentModel } from '../../models/comment-model';
import { PostModel } from '../../models/post-model';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts-page',
  imports: [AsyncPipe, Paginator, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.css',
})
export class PostsPage implements OnInit {
 private postService = inject(PostService);
 private snackBar = inject(SnackBar);
 private cdr = inject(ChangeDetectorRef);
 private fb = inject(FormBuilder)

  limit : number = 20;
  currentPage : number = 1;
  @Input() offset : number = (this.currentPage - 1) * this.limit;

   posts$ = this.postService.post$;
   totalPost : number = 0;
   isOpen = signal(false);
   isCreate = signal(false);

   private postId: number =  23; // TODO: DA SISTEMARE DINAMICAMENTE

  newCommentForm : FormGroup = this.fb.group({
     name: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     body: ['', Validators.required],
  })


  openCommentModal(){
    console.log('isCreate prima:', this.isCreate())
    this.isCreate.update(open => !open);
     console.log('isCreate dopo:', this.isCreate())
    if(this.isOpen() == true){
      this.isCreate.set(false)
    }
    this.isOpen.set(false)
  }



  ngOnInit(): void {
    this.postService.getPost()
    this.postService.totalPost$.subscribe( totalPage =>{
      this.totalPost = totalPage;
      this.cdr.detectChanges()
    })
    this.postService.post$.subscribe(posts =>{
       posts.forEach((post:PostModel) =>{
        this.postService.getComment(post?.id).subscribe( (totalComments)=> {
          post.comment = totalComments
          this.cdr.detectChanges()
          console.log('post totali:', totalComments);

        })
      });
    
    })
    this.cdr.detectChanges()
  }

onSubmit(){
  this.addComment()
}


  deletePost(postId: number | undefined){
    this.postService.deletePost(postId).subscribe({
      next: (data: any)=> {
        this.postService.getPost();
        this.snackBar.openSnackBar('Post eliminato con successo!');
        this.cdr.detectChanges();
        
      },
      error: () => this.snackBar.openSnackBar('Errore nella eliminazione del post')
  
    })
  }

  // TODO: VERIFICARE SE FUNZIONA
  addComment(){
    if(this.newCommentForm.valid){
      this.postService.createComment(this.newCommentForm.value as CommentModel, this.postId).subscribe({
        next: (data :any) =>{
          this.newCommentForm = data;
          this.newCommentForm.reset();
          this.cdr.detectChanges()
        },
        error: (err: any) => this.snackBar.openSnackBar('Errore nella creazione del nuovo commento:', err)
      })

    }
   alert('Form non valido')
  }


  changePage(pageNumber : number){
    if(pageNumber < 1) return;

    this.currentPage = pageNumber;
    this.offset = this.offset
    this.postService.getPost(pageNumber)

  }
}
