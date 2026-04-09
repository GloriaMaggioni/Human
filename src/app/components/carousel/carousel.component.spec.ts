import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.carousel = [
      {
        img : 'ciao bello',
        cit : 'Bisogna vivere al massimo delle proprie possibilità',
        name: 'Gloria Maggioni',
        bornDate: 1996,
        deathDate: 3000,
        profession: 'Developer',
        background: 'blue',
        city: 'Milan'

      }
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
