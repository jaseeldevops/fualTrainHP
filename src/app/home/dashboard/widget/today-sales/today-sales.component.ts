import { Component, Input } from '@angular/core';

@Component({
  selector: 'TodaySalesGraph',
  templateUrl: './today-sales.component.html',
  styleUrls: ['./today-sales.component.css'],
})
export class TodaySalesComponent {
  @Input() datas: any = {};
}
