import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBucketComponent } from './transaction-bucket.component';

describe('TransactionBucketComponent', () => {
  let component: TransactionBucketComponent;
  let fixture: ComponentFixture<TransactionBucketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionBucketComponent]
    });
    fixture = TestBed.createComponent(TransactionBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
