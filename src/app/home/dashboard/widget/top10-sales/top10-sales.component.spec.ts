import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10SalesComponent } from './top10-sales.component';

describe('Top10SalesComponent', () => {
  let component: Top10SalesComponent;
  let fixture: ComponentFixture<Top10SalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top10SalesComponent]
    });
    fixture = TestBed.createComponent(Top10SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
