import { Component, Input } from '@angular/core';

@Component({
  selector: 'PieChart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
  @Input() datas: any = {};
  @Input() width: any = '';
  @Input() hrLabel: any = false;
  values: any = [];
  ngOnInit() {
    let j = 0;
    let total = 0;
    for (let i = 0; i < 360; i++) {
      if ((total + this.datas?.list[j].value) * 3.6 < i) {
        total += this.datas?.list[j].value;
        j++;
      }
      console.log(this.datas?.list[j].color);
      this.values.push(this.datas?.list[j]?.color);
    }
  }
}
