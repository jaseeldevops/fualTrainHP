import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MopSalesComponent } from './mop-sales.component';

describe('MopSalesComponent', () => {
  let component: MopSalesComponent;
  let fixture: ComponentFixture<MopSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MopSalesComponent]
    });
    fixture = TestBed.createComponent(MopSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
