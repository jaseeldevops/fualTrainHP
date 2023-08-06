import { Component, Input } from '@angular/core';

@Component({
  selector: 'SapVsTransit',
  templateUrl: './sap-vs-transit.component.html',
  styleUrls: ['./sap-vs-transit.component.css'],
})
export class SapVsTransitComponent {
  @Input() datas: any = {};
}
