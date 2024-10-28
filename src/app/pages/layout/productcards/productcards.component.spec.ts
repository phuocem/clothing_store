import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcardsComponent } from './productcards.component';

describe('ProductcardsComponent', () => {
  let component: ProductcardsComponent;
  let fixture: ComponentFixture<ProductcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
