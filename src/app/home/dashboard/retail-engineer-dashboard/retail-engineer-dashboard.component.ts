import { Component } from '@angular/core';

@Component({
  selector: 'app-retail-engineer-dashboard',
  templateUrl: './retail-engineer-dashboard.component.html',
  styleUrls: ['./retail-engineer-dashboard.component.css']
})
export class RetailEngineerDashboardComponent {
  // <-START-> Site Status
  siteStatus = {};
  // <END-> Site Status
  //
  // <-START-> Tank & Ullage Status
  tankAndUllage = {
    selected: 'TOTAL',
    navList: ['TOTAL', 'HSD', 'MS', 'POWER', 'POWER99', 'POWER100', 'TURBOJET'],
    onChangeSelected: (v: any) => {
      this.tankAndUllage.selected = v;
    },
  };
  // <END-> Tank & Ullage Status
  //
  // <-START-> DU & Nozzle Status
  duAndNozzzle = {
    selected: 'DU',
    navList: ['DU', 'NOZZLE'],
    onChangeSelected: (v: any) => {
      this.duAndNozzzle.selected = v;
    },
    dropList: [
      'Total',
      'HSD',
      'MS',
      'POWER',
      'POWER99',
      'POWER100',
      'TURBO JET',
    ],
    onChangeDropDown: (e: any) => {
      console.log(e.target.value);
    },
  };
  // <END-> DU & Nozzle Status
}
