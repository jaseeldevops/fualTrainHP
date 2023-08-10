import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NozzleTankComponent } from './nozzle-tank.component';

describe('NozzleTankComponent', () => {
  let component: NozzleTankComponent;
  let fixture: ComponentFixture<NozzleTankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NozzleTankComponent]
    });
    fixture = TestBed.createComponent(NozzleTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
