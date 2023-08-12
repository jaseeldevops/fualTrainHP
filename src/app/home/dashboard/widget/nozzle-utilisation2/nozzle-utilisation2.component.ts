import { Component, Input } from '@angular/core';

@Component({
  selector: 'NozzleUtilisation2',
  templateUrl: './nozzle-utilisation2.component.html',
  styleUrls: ['./nozzle-utilisation2.component.css']
})
export class NozzleUtilisation2Component {
  @Input() datas: any = {};
}
