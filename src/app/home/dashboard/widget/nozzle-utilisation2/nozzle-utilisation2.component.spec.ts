import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NozzleUtilisation2Component } from './nozzle-utilisation2.component';

describe('NozzleUtilisation2Component', () => {
  let component: NozzleUtilisation2Component;
  let fixture: ComponentFixture<NozzleUtilisation2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NozzleUtilisation2Component]
    });
    fixture = TestBed.createComponent(NozzleUtilisation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
