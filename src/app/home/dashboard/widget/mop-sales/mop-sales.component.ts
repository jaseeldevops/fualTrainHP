import { Component, Input } from '@angular/core';

@Component({
  selector: 'MOPSales',
  templateUrl: './mop-sales.component.html',
  styleUrls: ['./mop-sales.component.css'],
})
export class MopSalesComponent {
  @Input() datas: any = {};
}
