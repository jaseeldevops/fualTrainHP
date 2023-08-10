import { Component, Input } from '@angular/core';

@Component({
  selector: 'MyBarGraph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent {
  @Input() datas: any = {};
}
