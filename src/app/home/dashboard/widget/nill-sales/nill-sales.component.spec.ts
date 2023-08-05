import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NillSalesComponent } from './nill-sales.component';

describe('NillSalesComponent', () => {
  let component: NillSalesComponent;
  let fixture: ComponentFixture<NillSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NillSalesComponent]
    });
    fixture = TestBed.createComponent(NillSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
