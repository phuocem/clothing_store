import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSetsComponent } from './product-sets.component';

describe('ProductSetsComponent', () => {
  let component: ProductSetsComponent;
  let fixture: ComponentFixture<ProductSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
