import { Component, Input } from '@angular/core';

@Component({
  selector: 'NozzleUtilisation',
  templateUrl: './nozzle-utilisation.component.html',
  styleUrls: ['./nozzle-utilisation.component.css'],
})
export class NozzleUtilisationComponent {
  @Input() datas: any = {};
}
