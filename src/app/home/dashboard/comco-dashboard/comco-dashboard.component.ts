import { Component } from '@angular/core';

@Component({
  selector: 'app-comco-dashboard',
  templateUrl: './comco-dashboard.component.html',
  styleUrls: ['./comco-dashboard.component.css'],
})
export class ComcoDashboardComponent {
  // <-START-> DU Status
  duStatus = {
    datas: [
      { title: 'Total Sites', value: '25,000', icon: 'totalSites.svg' },
      { title: 'Online', value: '23,000', percentage: 60 },
      { title: 'Offline', value: '2,000', percentage: 8 },
    ],
  };
  // <END-> DU Status
  //
  // <-START-> Tank Status
  tankStatus = {
    selected: 'TOTAL',
    navList: ['TOTAL', 'HSD', 'MS', 'POWER', 'POWER99', 'POWER100', 'TURBOJET'],
    onChangeSelected: (v: any) => {
      this.tankStatus.selected = v;
    },
    datas: [
      { title: 'Total Sites', value: '25,000', icon: 'totalTank.svg' },
      { title: 'Online', value: '23,000', percentage: 60 },
      { title: 'Offline', value: '2,000', percentage: 8 },
    ],
  };
  // <END-> Tank Status
  //
  // <-START-> Alarm Status
  alarmStatus = {
    datas: [
      { title: 'Total', value: '89', icon: 'belDarkBlue.png' },
      { title: 'Open', value: '12', icon: 'belBlue.png' },
      { title: 'High', value: '23', icon: 'belGreen.png' },
      { title: 'Low', value: '89', icon: 'belOrange.png' },
    ],
  };
  // <END-> Alarm Status
  //
  // <-START-> Today's Price
  todaysPrice = [
    { title: 'HSD', color: '#5470C6', value: '90.23' },
    { title: 'MS', color: '#03B271', value: '106.46' },
    { title: 'POWER', color: '#DF5041', value: '128.98' },
    { title: 'POWER 99', color: '#9B3F37', value: '129.35' },
    { title: 'POWER 100', color: '#ECBB38', value: '129.35' },
    { title: 'TURBO JET', color: '#443C6B', value: '129.35' },
  ];
  // <END-> Today's Price
  //
  // <-START-> Today's Price
  salesSummery = [
    { title: 'HSD', color: '#5470C6', value: '90.23' },
    { title: 'MS', color: '#03B271', value: '106.46' },
    { title: 'POWER', color: '#DF5041', value: '128.98' },
    { title: 'POWER 99', color: '#9B3F37', value: '129.35' },
    { title: 'POWER 100', color: '#ECBB38', value: '129.35' },
    { title: 'TURBO JET', color: '#443C6B', value: '129.35' },
  ];
  // <END-> Today's Price
  //
  // <-START-> Sales & Inventory
  salesAndInventory = {
    selected: 'Sales',
    navList: ['Sales', 'Inventory'],
    onChangeSelected: (v: any) => {
      this.salesAndInventory.selected = v;
    },
    values: {
      totalInventory: '14238.41',
      ullage: '7123.18',
      graphUpAndDown: '1.32',
      graphUpDown: 'up', // up, down
      verticalTitle: 'Volume (KL)',
      verticalValues: ['0', '2000', '4000', '6000'],
      horizontalValues: [
        {
          title: 'HSD',
          values: [
            { value: '234', percentage: 10, color: '#5470C6' },
            { value: '45', percentage: 30, color: '#49A149' },
          ],
        },
        {
          title: 'MS',
          values: [
            { value: '234', percentage: 10, color: '#5470C6' },
            { value: '45', percentage: 100, color: '#49A149' },
          ],
        },
        {
          title: 'POWER',
          values: [
            { value: '234', percentage: 50, color: '#5470C6' },
            { value: '45', percentage: 40, color: '#49A149' },
          ],
        },
        {
          title: 'POWER 99',
          values: [
            { value: '234', percentage: 80, color: '#5470C6' },
            { value: '45', percentage: 100, color: '#49A149' },
          ],
        },
        {
          title: 'POWER 100',
          values: [
            { value: '234', percentage: 10, color: '#5470C6' },
            { value: '45', percentage: 100, color: '#49A149' },
          ],
        },
        {
          title: 'TURBOJET',
          values: [
            { value: '234', percentage: 20, color: '#5470C6' },
            { value: '45', percentage: 90, color: '#49A149' },
          ],
        },
      ],
      titles: [
        { title: 'Indents placed', color: '#5470C6' },
        { title: 'Indents executed', color: '#49A149' },
      ],
    },
  };
  // <END-> Sales & Inventory
  //
  // <-START-> Nozzle Utilisation
  nozzleUtilisation = {
    total: '12879',
    totalUnit: 'Txn',
    average: '42.23',
    averageUnit: 'Ltr',
    items: [
      {
        item: 'HSD',
        color: '#4149E1',
        nozzleCount: '2000',
        total: '2572',
        totalUnit: 'Txn',
        average: '103',
        averageUnit: 'Ltr',
      },
      {
        item: 'MS',
        color: '#49A149',
        nozzleCount: '1000',
        total: '2572',
        totalUnit: 'Txn',
        average: '103',
        averageUnit: 'Ltr',
      },
      {
        item: 'POWER',
        color: '#DF5041',
        nozzleCount: '1500',
        total: '2572',
        totalUnit: 'Txn',
        average: '103',
        averageUnit: 'Ltr',
      },
      {
        item: 'POWER',
        color: '#DF5041',
        nozzleCount: '1500',
        total: '2572',
        totalUnit: 'Txn',
        average: '103',
        averageUnit: 'Ltr',
      },
    ],
  };
  // <END-> Nozzle Utilisation
  //
  //
  // <-START-> Today's Price
  nozzleSales = [
    { title: 'HSD', color: '#5470C6', value: '90.23', price: '90.23' },
    { title: 'MS', color: '#03B271', value: '106.46', price: '106.46' },
    { title: 'POWER', color: '#DF5041', value: '128.98', price: '128.98' },
    { title: 'POWER 99', color: '#9B3F37', value: '129.35', price: '129.35' },
    { title: 'POWER 100', color: '#ECBB38', value: '129.35', price: '129.35' },
    { title: 'POWER 100', color: '#ECBB38', value: '129.35', price: '129.35' },
    { title: 'POWER 100', color: '#ECBB38', value: '129.35', price: '129.35' },
    { title: 'POWER 100', color: '#ECBB38', value: '129.35', price: '129.35' },
    { title: 'TURBO JET', color: '#443C6B', value: '129.35', price: '129.35' },
  ];
  // <END-> Today's Price
  //
  //
  // <-START-> Inventory Forecate
  inventoryForcate = [
    {
      title: 'DRY OUT',
      color: '#F0534A',
      value: '15',
      graph: 30, // In Percentage
    },
    {
      title: 'INTRADAY DRY OUT',
      color: '#4A5BF0',
      value: '5',
      graph: 30, // In Percentage
    },
    {
      title: '1-3 Days',
      color: '#F0A04A',
      value: '12475',
      graph: 30, // In Percentage
    },
    {
      title: '3-6 Days',
      color: '#A09452',
      value: '48',
      graph: 80, // In Percentage
    },
  ];
  // <END-> Inventory Forecate
}
