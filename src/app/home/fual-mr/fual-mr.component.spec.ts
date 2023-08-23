import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FualMRComponent } from './fual-mr.component';

describe('FualMRComponent', () => {
  let component: FualMRComponent;
  let fixture: ComponentFixture<FualMRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FualMRComponent]
    });
    fixture = TestBed.createComponent(FualMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
