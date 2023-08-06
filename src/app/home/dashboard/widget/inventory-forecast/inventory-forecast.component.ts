import { Component, Input } from '@angular/core';

@Component({
  selector: 'InventoryForecast',
  templateUrl: './inventory-forecast.component.html',
  styleUrls: ['./inventory-forecast.component.css'],
})
export class InventoryForecastComponent {
  @Input() datas: any = [];
  selected: any = null;
}
