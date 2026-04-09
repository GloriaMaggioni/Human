import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { provideRouter } from '@angular/router';
import { AuthService } from '../../auth/auth-service';
import { NgForm } from '@angular/forms';


const authServiceStub = {
  login: jasmine.createSpy('login')
}


describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [
        provideRouter([]),
        {provide: AuthService, useValue: authServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should do the login', () =>{
    const mockForm = {
      value: {
        email: 'email@test.com',
        password: 'password'
      }
    } as NgForm;

    component.onSubmit(mockForm);
    fixture.detectChanges(),
    expect(authServiceStub.login).toHaveBeenCalled()
  })
});
