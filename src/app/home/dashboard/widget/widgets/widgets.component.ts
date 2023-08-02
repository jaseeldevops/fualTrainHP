import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboardWidgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent {
  @Input() width = '8vw';
  @Input() title = '';
  @Input() value = '';
  @Input() subValue = '';
  @Input() type = 'icon'; // icon, graph
  @Input() icon = '';
  @Input() graphColor = ''; // mostly => red or green
  @Input() graphValue = ''; // mostly => red or green
  @Input() percentage = 0; // mostly => red or green
  @Input() color = '#406CA5'; // mostly => red or green

  graphList: any = [];
  ngOnInit() {
    for (let i = 360; i > 0; i--)
      this.graphList.push(i < this.percentage * 3.6);
  }
}
