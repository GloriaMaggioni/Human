import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityAndHealthPageComponent } from './productivity-and-health-page.component';

describe('ProductivityAndHealthPageComponent', () => {
  let component: ProductivityAndHealthPageComponent;
  let fixture: ComponentFixture<ProductivityAndHealthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductivityAndHealthPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductivityAndHealthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
