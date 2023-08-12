import { Component, Input } from '@angular/core';

@Component({
  selector: 'Transaction-bucket',
  templateUrl: './transaction-bucket.component.html',
  styleUrls: ['./transaction-bucket.component.css'],
})
export class TransactionBucketComponent {
  @Input() datas: any = {};
}
