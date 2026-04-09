import { TestBed } from '@angular/core/testing';

import { UsersService } from './users-service';
import { provideHttpClient } from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing'
import { HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/users';

describe('UsersService', () => {
  let service: UsersService;
  let controller : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(UsersService);
    controller = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  
  });


  it('it should return data of users ', () =>{
     // 1. dati finti che simulano gli users
    const mockUsers = [
       {id:1 , name: 'Gloria', email: 'gloria@test.com', gender: 'female', status: 'active'},
       {id:2 , name: 'Mario', email: 'mario@test.com', gender: 'male', status: 'inactive'}

    ];

     // chiamare metodo
     service.getUser();


     //intercettare la richiesta http
     const resp = controller.expectOne('https://gorest.co.in/public/v2/users?page=1&per_page=30');
     resp.flush(mockUsers) // risposta da ricevere

     //verificare che users$ contenga i dati(mockUsers)
     service.users$.subscribe( users => {
       expect(users).toEqual(mockUsers)
     })

  })

  it('should add a user', () => {
  const mockUser: User = {
    name: 'Mario User',
    email: 'mario.user@test.com',
    gender: 'male',
    status: 'active'
  };

  service.addUser(mockUser).subscribe(response => {
    expect(response).toBeTruthy();
  });

  const req = controller.expectOne(req => 
    req.method === 'POST' && req.url === 'https://gorest.co.in/public/v2/users'
  );
  req.flush(mockUser);
});


 it('should delete a user', () => {
   const mockUser : User = {
    id: 2,
     name: 'Gloria Maggioni',
    email: 'gloria@test.com',
    gender: 'female',
    status: 'active'

   }
  
   service.deleteUser(mockUser.id).subscribe(res =>{
     expect(res).toBeTruthy()
   });

   const resp = controller.expectOne('https://gorest.co.in/public/v2/users/2');
     resp.flush({}) 
  })




  it('it should return details of users ', () =>{
  
    const mockUsers = [
       {id: 1 , name: 'Gianna', email: 'gianna@test.com', gender: 'female', status: 'inactive'},
    ];

  
     service.getUserDetails(mockUsers[0].id).subscribe(response =>{
      expect(response).toBeTruthy()
     });


   
     const resp = controller.expectOne('https://gorest.co.in/public/v2/users/1');
     resp.flush({}) 

  })




});
