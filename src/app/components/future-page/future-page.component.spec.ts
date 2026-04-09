import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePageComponent } from './future-page.component';
import { FirestoreService } from '../../services/firestore-service';

const firestoreServiceStub = {
  getCharacters: () => Promise.resolve([])
}

describe('FuturePageComponent', () => {
  let component: FuturePageComponent;
  let fixture: ComponentFixture<FuturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuturePageComponent],
       providers: [
          { provide: FirestoreService ,useValue: firestoreServiceStub}
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
