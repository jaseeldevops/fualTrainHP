import { Component, Input } from '@angular/core';

@Component({
  selector: 'NillSales',
  templateUrl: './nill-sales.component.html',
  styleUrls: ['./nill-sales.component.css'],
})
export class NillSalesComponent {
  @Input() datas: any = {};
}
