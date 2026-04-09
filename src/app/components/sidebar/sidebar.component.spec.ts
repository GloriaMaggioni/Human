import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { provideRouter } from '@angular/router';
import { AuthService } from '../../auth/auth-service';

const authServiceStub = {
  logout: jasmine.createSpy('logout')
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
        providers: [
          provideRouter([]),
          {provide:AuthService, useValue: authServiceStub}
        ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should do the logout', () =>{
    component.logoutClick();
    fixture.detectChanges();
    expect(authServiceStub.logout).toHaveBeenCalled()

  })
});
