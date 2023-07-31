import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcoDashboardComponent } from './comco-dashboard.component';

describe('ComcoDashboardComponent', () => {
  let component: ComcoDashboardComponent;
  let fixture: ComponentFixture<ComcoDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComcoDashboardComponent]
    });
    fixture = TestBed.createComponent(ComcoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
