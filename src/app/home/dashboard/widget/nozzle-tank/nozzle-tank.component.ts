import { Component, Input } from '@angular/core';

@Component({
  selector: 'NozzleTankUtilisation',
  templateUrl: './nozzle-tank.component.html',
  styleUrls: ['./nozzle-tank.component.css'],
})
export class NozzleTankComponent {
  @Input() datas: any = {};
}
