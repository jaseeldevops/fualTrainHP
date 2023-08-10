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
      { title: 'CNG Sites', value: '1,500', icon: 'siteInSAP.svg' },
      { title: 'DDD', value: '2,542', icon: 'siteInAuto.svg' },
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
  //
  //
  // <-START-> Nozzle Tank Utilisation
  nozzleTank = {
    selected: 'DU & Nozzle Utilisation',
    navList: ['DU & Nozzle Utilisation', 'No Receipt', 'Nil Sale'],
    onChangeSelected: (v: any) => {
      this.nozzleTank.selected = v;
    },
    selected2: 'Last 7 days',
    navList2: ['Last 7 days', 'Last 15 days', '<30 days', '>30 days'],
    onChangeSelected2: (v: any) => {
      this.nozzleTank.selected2 = v;
    },
    values: {
      total: '12879',
      totalUnit: 'Txn',
      average: '42.23',
      averageUnit: 'Ltr',
      items: [
        {
          item: 'HSD',
          color: '#4149E1',
          nozzleCount: '2000',
          notInUse: '212',
          total: '2572',
          totalUnit: 'Txn',
          average: '103',
          averageUnit: 'Ltr',
        },
        {
          item: 'MS',
          color: '#49A149',
          nozzleCount: '1000',
          notInUse: '145',
          total: '2572',
          totalUnit: 'Txn',
          average: '103',
          averageUnit: 'Ltr',
        },
        {
          item: 'POWER',
          color: '#DF5041',
          nozzleCount: '1500',
          notInUse: '247',
          total: '2572',
          totalUnit: 'Txn',
          average: '103',
          averageUnit: 'Ltr',
        },
      ],
    },
  };
  // <END-> Nozzle Utilisation
  //
  // <-START-> Nano Status
  nanoStatus = {
    title1: 'HSD',
    title2: '102 Tanks',
    title3: '36 RO',
    list: [
      { title: 'HSD', color: '#5470C6', value: 20, total: 100 }, //Value in pecentage
      { title: 'MS', color: '#49A149', value: 30, total: 100 }, //Value in pecentage
      { title: 'POWER', color: '#DF5041', value: 10, total: 100 }, //Value in pecentage
      { title: 'POWER 99', color: '#9B3F37', value: 20, total: 100 }, //Value in pecentage
      { title: 'POWER 100', color: '#ECBB38', value: 10, total: 100 }, //Value in pecentage
      { title: 'TURBO JET', color: '#443C6B', value: 10, total: 100 }, //Value in pecentage
    ],
  };
  // <END-> Nano Status
  //
  // <-START-> RO Connectivity Status
  roConnectivityStatus = {
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
    values: {
      title1: 'HSD',
      title2: '102 Tanks',
      title3: '36 RO',
      list: [
        { title: 'HSD', color: '#5470C6', value: 20, total: 100 }, //Value in pecentage
        { title: 'MS', color: '#49A149', value: 30, total: 100 }, //Value in pecentage
        { title: 'POWER', color: '#DF5041', value: 10, total: 100 }, //Value in pecentage
        { title: 'POWER 99', color: '#9B3F37', value: 20, total: 100 }, //Value in pecentage
        { title: 'POWER 100', color: '#ECBB38', value: 10, total: 100 }, //Value in pecentage
        { title: 'TURBO JET', color: '#443C6B', value: 10, total: 100 }, //Value in pecentage
      ],
    },
  };
  // <END-> RO Connectivity Status
  //
  // <-START-> Future Date Transactions & Alarms
  futureDataTransfer = {
    selected: 'Future Data',
    navList: ['Future Data', 'Alarms', 'ATG Float Stuck'],
    onChangeSelected: (v: any) => {
      this.futureDataTransfer.selected = v;
    },
    values: {
      verticalTitle: 'RO COUNT',
      verticalValues: ['0', '2,000', '4,000', '6,000', '8,000', '10,000'],
      horizontalValues: [
        { title: 'Total nil sale', color: '#8554C6', value: '90' }, // value In Persentage(%)
        { title: 'No transaction Last 7 Days', color: '#FF9066', value: '30' }, // value In Persentage(%)
        { title: 'No transaction Last 2 Days', color: '#FFCA41', value: '80' }, // value In Persentage(%)
        { title: 'No transaction Last 2 Days', color: '#FFCA41', value: '100' }, // value In Persentage(%)
        { title: 'No transaction', color: '#FFCA41', value: '80' }, // value In Persentage(%)
      ],
    },
  };
  // <END-> Future Date Transactions & Alarms
  //
  // <-START-> Price Change & Exceptions
  stockReconsilation = {
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
    values: {
      title1: 'HSD',
      title2: '102 Tanks',
      title3: '36 RO',
      list: [
        { title: 'HSD', color: '#E3C631', value: 70, total: 100 }, //Value in pecentage
        { title: 'MS', color: '#F0534A', value: 30, total: 100 }, //Value in pecentage
      ],
    },
  };
  // <END-> Price Change & Exceptions

  //
  // <-START-> Interlock parameters
  interlockParameters = {
    selected: 'Interlock Status',
    navList: ['Interlock Status', 'Manuel Mode', 'Interlock type'],
    onChangeSelected: (v: any) => {
      this.interlockParameters.selected = v;
    },
    values: {
      verticalTitle: 'RO Count',
      verticalValues: ['0', '2,000', '4,000', '6,000', '8,000', '10,000'],
      horizontalValues: [
        {
          title: 'Mandatory',
          values: [
            { percentage: 10, color: '#4149E1' },
            { percentage: 100, color: '#49A149' },
            { percentage: 20, color: '#D43A2A' },
            { percentage: 90, color: '#D43A2A' },
            { percentage: 80, color: '#D43A2A' },
            { percentage: 20, color: '#D43A2A' },
          ],
        },
        {
          title: 'Non Mandatory',
          values: [
            { percentage: 10, color: '#4149E1' },
            { percentage: 100, color: '#49A149' },
            { percentage: 20, color: '#D43A2A' },
          ],
        },
      ],
      titles: [
        { title: 'Total complants', color: '#4149E1' },
        { title: 'Resolved', color: '#49A149' },
        { title: 'Pending', color: '#D43A2A' },
        { title: 'Pending', color: '#D43A2A' },
        { title: 'Pending', color: '#D43A2A' },
        { title: 'Pending', color: '#D43A2A' },
        { title: 'Pending', color: '#D43A2A' },
        { title: 'Pending', color: '#D43A2A' },
        { title: 'Pending', color: '#D43A2A' },
        { title: 'Pending', color: '#D43A2A' },
        { title: 'Pending', color: '#D43A2A' },
        { title: 'Pending', color: '#D43A2A' },
      ],
    },
  };
  // <END-> TT Receipts SAP vs Actual and TT in top T ransit
  //
  // <-START-> Control Record Status
  controlRecordStatus = {
    values: {
      verticalTitle: 'RO COUNT',
      verticalValues: ['0', '2,000', '4,000', '6,000', '8,000', '10,000'],
      horizontalValues: [
        {
          title: 'Total nil sale',
          color: '#8554C6',
          value: 90,
          subColor: 'red',
          subValue: 30,
        }, // value In Persentage(%)
        {
          title: 'No transaction Last 7 Days',
          color: '#FF9066',
          value: 30,
          subColor: 'red',
          subValue: 20,
        }, // value In Persentage(%)
        {
          title: 'No transaction Last 2 Days',
          color: '#FFCA41',
          value: 80,
          subColor: 'red',
          subValue: 40,
        }, // value In Persentage(%)
        {
          title: 'No transaction Last 2 Days',
          color: '#FFCA41',
          value: 100,
          subColor: 'red',
          subValue: 50,
        }, // value In Persentage(%)
        {
          title: 'No transaction',
          color: '#FFCA41',
          value: 80,
          subColor: 'red',
          subValue: 10,
        }, // value In Persentage(%)
      ],
    },
  };
  // <END-> Control Record Status
  //
  // <-START-> Price Change & Exceptions
  priceChangeExceptions = {
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
    values: {
      title1: 'HSD',
      title2: '102 Tanks',
      title3: '36 RO',
      list: [
        { title: 'HSD', color: '#5470C6', value: 20, total: 100 }, //Value in pecentage
        { title: 'MS', color: '#49A149', value: 30, total: 100 }, //Value in pecentage
        { title: 'POWER', color: '#DF5041', value: 10, total: 100 }, //Value in pecentage
        { title: 'POWER 99', color: '#9B3F37', value: 20, total: 100 }, //Value in pecentage
        { title: 'POWER 100', color: '#ECBB38', value: 10, total: 100 }, //Value in pecentage
        { title: 'TURBO JET', color: '#443C6B', value: 10, total: 100 }, //Value in pecentage
      ],
    },
  };
  // <END-> Price Change & Exceptions
  //
  // <-START-> Sales & Inventory Trend
  nanoConnectivity = {
    selected: 'Trend',
    navList: ['Trend', 'Ageing'],
    onChangeSelected: (v: any) => {
      this.nanoConnectivity.selected = v;
    },
    values: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
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
    },
  };
  // <END-> Sales & Inventory Trend
  //
  // <-START-> Software version updates
  softwareVersion = {
    selected: 'ATOS',
    navList: ['ATOS', 'BCT', 'ORPAK', 'PINELABS', 'RELCON'],
    onChangeSelected: (v: any) => {
      this.softwareVersion.selected = v;
    },
    values: {
      verticalTitle: 'RO COUNT',
      verticalValues: ['0', '2,000', '4,000', '6,000', '8,000', '10,000'],
      horizontalValues: [
        { title: 'Total nil sale', color: '#8554C6', value: '90' }, // value In Persentage(%)
        { title: 'No transaction Last 7 Days', color: '#FF9066', value: '30' }, // value In Persentage(%)
        { title: 'No transaction Last 2 Days', color: '#FFCA41', value: '80' }, // value In Persentage(%)
        { title: 'No transaction Last 2 Days', color: '#FFCA41', value: '100' }, // value In Persentage(%)
        { title: 'No transaction', color: '#FFCA41', value: '80' }, // value In Persentage(%)
      ],
    },
  };
  // <END-> Software version updates
  //
  //
  // <-START-> TT Receipts SAP vs Actual and TT in top T ransit
  romms = {
    values: {
      verticalTitle: 'Number of receipts',
      verticalValues: ['0', '50', '100', '150', '200', '250'],
      horizontalValues: [
        {
          title: 'Category 1',
          values: [
            { percentage: 10, color: '#4149E1' },
            { percentage: 100, color: '#49A149' },
            { percentage: 20, color: '#D43A2A' },
          ],
        },
        {
          title: 'Category 2',
          values: [
            { percentage: 10, color: '#4149E1' },
            { percentage: 100, color: '#49A149' },
            { percentage: 20, color: '#D43A2A' },
          ],
        },
        {
          title: 'Category 3',
          values: [
            { percentage: 10, color: '#4149E1' },
            { percentage: 100, color: '#49A149' },
            { percentage: 20, color: '#D43A2A' },
          ],
        },
        {
          title: 'Category 4',
          values: [
            { percentage: 10, color: '#4149E1' },
            { percentage: 100, color: '#49A149' },
            { percentage: 20, color: '#D43A2A' },
          ],
        },
        {
          title: 'Category 5',
          values: [
            { percentage: 10, color: '#4149E1' },
            { percentage: 100, color: '#49A149' },
            { percentage: 20, color: '#D43A2A' },
          ],
        },
        {
          title: 'Category 6',
          values: [
            { percentage: 10, color: '#4149E1' },
            { percentage: 100, color: '#49A149' },
            { percentage: 20, color: '#D43A2A' },
          ],
        },
      ],
      titles: [
        { title: 'Total complants', color: '#4149E1' },
        { title: 'Resolved', color: '#49A149' },
        { title: 'Pending', color: '#D43A2A' },
      ],
    },
  };
  // <END-> TT Receipts SAP vs Actual and TT in top T ransit
}
