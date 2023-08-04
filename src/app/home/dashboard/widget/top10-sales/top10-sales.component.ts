import { Component, Input } from '@angular/core';

@Component({
  selector: 'Top10SalesGraph',
  templateUrl: './top10-sales.component.html',
  styleUrls: ['./top10-sales.component.css'],
})
export class Top10SalesComponent {
  @Input() values: any = [];
}
