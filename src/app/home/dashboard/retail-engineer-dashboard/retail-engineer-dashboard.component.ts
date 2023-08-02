import { Component } from '@angular/core';

@Component({
  selector: 'app-retail-engineer-dashboard',
  templateUrl: './retail-engineer-dashboard.component.html',
  styleUrls: ['./retail-engineer-dashboard.component.css'],
})
export class RetailEngineerDashboardComponent {
  // <-START-> Site Status
  siteStatus = {
    datas: [
      { title: 'Total Sites', value: '25,000', icon: 'totalSites.svg' },
      { title: 'Online', value: '23,000', percentage: 60 },
      { title: 'Offline', value: '2,000', percentage: 8 },
      { title: 'CNG Sites', value: '1,500', icon: 'cngSites.svg' },
      { title: 'DDD', value: '2,542', icon: 'ddd.svg' },
      { title: 'E20', value: '4,145', icon: 'e20.png' },
    ],
  };
  // <END-> Site Status
  //
  // <-START-> Tank & Ullage Status
  tankAndUllage = {
    selected: 'TOTAL',
    navList: ['TOTAL', 'HSD', 'MS', 'POWER', 'POWER99', 'POWER100', 'TURBOJET'],
    onChangeSelected: (v: any) => {
      this.tankAndUllage.selected = v;
    },
    datas: [
      {
        title: 'Total Tank',
        value: '75,236',
        subValue: 'RO:23,245',
        icon: 'totalTank.svg',
      },
      {
        title: 'Online',
        value: '48,151',
        subValue: 'RO:20,127',
        percentage: 60,
      },
      {
        title: 'Offline',
        value: '27,085',
        subValue: 'RO:3,118',
        percentage: 8,
      },
      {
        title: 'Not in use',
        value: '8,124',
        subValue: 'RO:7,251',
        icon: 'notInUse.png',
      },
      {
        title: 'Capacity (KL)',
        value: '96,148',
        subValue: '',
        icon: 'capacity.png',
      },
      {
        title: 'Ullage (KL)',
        value: '75,236',
        subValue: '30.5%',
        icon: 'ullage.png',
      },
    ],
  };
  // <END-> Tank & Ullage Status
  //
  // <-START-> DU & Nozzle Status
  duAndNozzle = {
    selected: 'DU',
    navList: ['DU', 'NOZZLE'],
    onChangeSelected: (v: any) => {
      this.duAndNozzle.selected = v;
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
    datas: [
      {
        title: 'Total Nozzle',
        value: '1,52,249',
        subValue: 'RO:23,245',
        icon: 'nozzleBlue.svg',
      },
      {
        title: 'Not in use',
        value: '8,124',
        subValue: 'RO:7,251',
        icon: 'nozzleYellow.svg',
      },
      {
        title: 'Not in use <2 days',
        value: '6,512',
        subValue: 'RO:2,124',
        icon: 'nozzleOrange.svg',
      },
      {
        title: 'Not in use >7 days',
        value: '612',
        subValue: 'RO:251',
        icon: 'nozzleBrown.svg',
      },
    ],
  };
  // <END-> DU & Nozzle Status
}
