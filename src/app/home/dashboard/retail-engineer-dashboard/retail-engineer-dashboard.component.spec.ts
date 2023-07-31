import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailEngineerDashboardComponent } from './retail-engineer-dashboard.component';

describe('RetailEngineerDashboardComponent', () => {
  let component: RetailEngineerDashboardComponent;
  let fixture: ComponentFixture<RetailEngineerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailEngineerDashboardComponent]
    });
    fixture = TestBed.createComponent(RetailEngineerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
