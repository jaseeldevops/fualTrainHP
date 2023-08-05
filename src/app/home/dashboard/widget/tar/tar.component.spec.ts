import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarComponent } from './tar.component';

describe('TarComponent', () => {
  let component: TarComponent;
  let fixture: ComponentFixture<TarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarComponent]
    });
    fixture = TestBed.createComponent(TarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
