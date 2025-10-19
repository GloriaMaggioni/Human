import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentsPageComponent } from './utents-page.component';

describe('UtentsPageComponent', () => {
  let component: UtentsPageComponent;
  let fixture: ComponentFixture<UtentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtentsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
