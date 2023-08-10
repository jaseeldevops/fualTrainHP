import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlockComponent } from './interlock.component';

describe('InterlockComponent', () => {
  let component: InterlockComponent;
  let fixture: ComponentFixture<InterlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterlockComponent]
    });
    fixture = TestBed.createComponent(InterlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
