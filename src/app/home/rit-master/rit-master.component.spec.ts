import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitMasterComponent } from './rit-master.component';

describe('RitMasterComponent', () => {
  let component: RitMasterComponent;
  let fixture: ComponentFixture<RitMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RitMasterComponent]
    });
    fixture = TestBed.createComponent(RitMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
