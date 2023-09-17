import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoMasterComponent } from './ro-master.component';

describe('RoMasterComponent', () => {
  let component: RoMasterComponent;
  let fixture: ComponentFixture<RoMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoMasterComponent]
    });
    fixture = TestBed.createComponent(RoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
