import { TestBed } from '@angular/core/testing';

import { PostService } from './post-service';
import { provideHttpClient } from '@angular/common/http';
import {  provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';



describe('PostService', () => {
  let service: PostService;
  let controller : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PostService);
    controller = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('it should return data of posts', ()=>{

    const mockPost = [
      {id: 1, user_id: 25, title: 'post di testing 1', body: 'descrizione del post 1 usato per il testing', comment:[]},
      {id: 2, user_id: 26, title: 'post di testing 2', body: 'descrizione del post 2 usato per il testing', comment:[]}

    ];

    service.getPost();


    const resp = controller.expectOne('https://gorest.co.in/public/v2/posts?page=1&per_page=20');
    resp.flush(mockPost);

    service.post$.subscribe(posts =>{
      expect(posts).toEqual(mockPost)
    })
  })



  it('should create a post', () =>{
    const mockPost = {
        id: 5, 
        user_id: 23, 
        title: 'post di testing 5', 
        body: 'descrizione del post 5 usato per il testing', comment:[],
    };

    service.createPost(mockPost, 1).subscribe( res =>{
      expect(res).toBeTruthy();
    })

    const req = controller.expectOne(req => 
    req.method === 'POST' && req.url === 'https://gorest.co.in/public/v2/users/1/posts'
  );
  req.flush(mockPost);
  })




 it('should delete a post', () => {
   const mockUser  = {
        id: 8, 
        user_id: 54, 
        title: 'post di testing 33', 
        body: 'descrizione del post 33 usato per il testing', comment:[],

   }
  
   service.deletePost(mockUser.id).subscribe(res =>{
     expect(res).toBeTruthy()
   });

   const resp = controller.expectOne('https://gorest.co.in/public/v2/posts/8');
     resp.flush({}) 
  })



  it('it should return details of the posts ', () =>{
  
    const mockPost = [
       {  id: 8, 
        user_id: 54, 
        title: 'post di testing 33', 
        body: 'descrizione del post 33 usato per il testing', comment:[]},
    ];

  
     service.getPostsByUserId(54)
   


   
     const resp = controller.expectOne('https://gorest.co.in/public/v2/users/54/posts');
     resp.flush(mockPost);
     
     service.post$.subscribe(posts =>{
      expect(posts).toEqual(mockPost)
     })

  })

});
