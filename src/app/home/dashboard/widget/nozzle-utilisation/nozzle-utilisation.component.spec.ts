import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NozzleUtilisationComponent } from './nozzle-utilisation.component';

describe('NozzleUtilisationComponent', () => {
  let component: NozzleUtilisationComponent;
  let fixture: ComponentFixture<NozzleUtilisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NozzleUtilisationComponent]
    });
    fixture = TestBed.createComponent(NozzleUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
