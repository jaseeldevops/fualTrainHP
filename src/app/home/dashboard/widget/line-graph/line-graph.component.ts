import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'MyLineGraph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css'],
})
export class LineGraphComponent {
  @Input() datas: any = {};

  @Input() height?: any = '8.5vw';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    datasets: [
      {
        data: [
          65, 59, 80, 81, 56, 55, 40, 65, 55, 40, 65, 59, 80, 81, 56, 55, 40,
        ],
        label: '',
        borderWidth: 1,
        tension: 0.5,
        borderColor: '#406CA5',
        backgroundColor: 'rgba(255,0,0,0)',
      },
      {
        data: [
          80, 81, 56, 55, 40, 65, 59, 80, 40, 65, 59, 80, 81, 56, 55, 40, 65,
        ],
        label: '',
        borderWidth: 1,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0)',
      },
      {
        data: [
          80, 55, 40, 65, 59, 80, 40, 65, 59, 80, 81, 56, 55, 40, 65, 81, 56,
          55, 40, 65, 59, 80, 40, 65, 59, 80, 81, 56, 55, 40, 65,
        ],
        label: '',
        borderWidth: 1,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;
}
