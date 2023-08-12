import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentStatusComponent } from './indent-status.component';

describe('IndentStatusComponent', () => {
  let component: IndentStatusComponent;
  let fixture: ComponentFixture<IndentStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndentStatusComponent]
    });
    fixture = TestBed.createComponent(IndentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
