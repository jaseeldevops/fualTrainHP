import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapVsTransitComponent } from './sap-vs-transit.component';

describe('SapVsTransitComponent', () => {
  let component: SapVsTransitComponent;
  let fixture: ComponentFixture<SapVsTransitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SapVsTransitComponent]
    });
    fixture = TestBed.createComponent(SapVsTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
