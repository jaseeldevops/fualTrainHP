import { Component, Input } from '@angular/core';

@Component({
  selector: 'NozzleTankUtilisation',
  templateUrl: './nozzle-tank.component.html',
  styleUrls: ['./nozzle-tank.component.css'],
})
export class NozzleTankComponent {
  @Input() datas: any = {};


  graphList: any = [];
  graphList1: any = [];
  ngOnInit() {
    for (let i = 360; i > 0; i--)
      this.graphList.push(i < this.datas?.nozzlePercentage * 3.6);
    for (let i = 360; i > 0; i--)
      this.graphList1.push(i < this.datas?.tankPercentage * 3.6);
  }
}
