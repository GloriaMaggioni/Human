import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesAndSpacesPageComponent } from './places-and-spaces-page.component';

describe('PlacesAndSpacesPageComponent', () => {
  let component: PlacesAndSpacesPageComponent;
  let fixture: ComponentFixture<PlacesAndSpacesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesAndSpacesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesAndSpacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
