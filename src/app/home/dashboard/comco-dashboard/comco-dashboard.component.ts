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
  // <-START-> Nozzle Sales
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
  // <END-> Nozzle Sales
  //
  // <-START-> Stock & Ullage
  stockUllage = {
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
      title1: 'Stock',
      title2: '102 Tanks',
      title3: '36 RO',
      list: [
        { title: 'HSD', color: '#5470C6', value: 80 }, //Value in pecentage
        { title: 'MS', color: '#91CC75', value: 20 }, //Value in pecentage
      ],
    },
  };
  // <END-> Stock & Ullage
  //
  //
  // <-START-> MOP Sales
  mopSales = {
    selected: 'Amount',
    navList: ['Amount', 'Transaction'],
    onChangeSelected: (v: any) => {
      this.mopSales.selected = v;
    },
    values: {
      verticalTitle: 'RO COUNT',
      verticalValues: ['0', '2,000', '4,000', '6,000', '8,000', '10,000'],
      horizontalValues: [
        { title: 'Cash', color: '#8674FE', value: '90' }, // value In Persentage(%)
        { title: 'Digital', color: '#FF9066', value: '30' }, // value In Persentage(%)
        { title: 'Credit', color: '#FFCA41', value: '80' }, // value In Persentage(%)
      ],
    },
  };
  // <END-> MOP Sales
  //
  //
  //
  // <-START-> Stock Reconsilation
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
      evpLimitP1: '98.63',
      evpLimitP2: '98.63',
      tankVariation: '512.92',
      permissibleLimit: '512.92',
    },
  };
  // <END-> Stock Reconsilation
  //
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
      title1: 'Stock',
      title2: '102 Tanks',
      title3: '36 RO',
      list: [
        { title: 'HSD', color: '#67C2E8', value: 20 }, //Value in pecentage
        { title: 'Total Exception', color: '#DC8ABB', value: 20 }, //Value in pecentage
        { title: 'Total Exception', color: '#DC8ABB', value: 40 }, //Value in pecentage
        { title: 'Total Exception', color: '#EE6666', value: 20 }, //Value in pecentage
        { title: 'Total Exception', color: '#4087A5', value: 20 }, //Value in pecentage
      ],
    },
  };
  // <END-> Price Change & Exceptions
  //
  //
  // <-START-> Sales /  Inventory Trend
  salesInventoryTrend = {
    selected: 'Today',
    navList: ['Today', 'Yesterday', 'Past 7 Days', 'Month'],
    onChangeSelected: (v: any) => {
      this.salesInventoryTrend.selected = v;
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
  // <END-> Sales / Inventory Trend
  //
  // <-START-> Transaction Bucket
  indentStatus = {
    tarBalance: '4,25,314.00',
    values: {
      verticalTitle: 'Number of receipts',
      verticalValues: ['0', '2', '4', '6', '8', '10'],
      horizontalValues: [
        { title: 'Indents placed', color: '#8554C6', value: '90' }, // value In Persentage(%)
        { title: 'Indents executed', color: '#FF9066', value: '30' }, // value In Persentage(%)
        { title: 'Idents on hold', color: '#FFCA41', value: '100' }, // value In Persentage(%)
        { title: 'Pending indents', color: '#42CC7D', value: '90' }, // value In Persentage(%)
        { title: 'Indents received', color: '#67C2E8', value: '80' }, // value In Persentage(%)
        { title: 'In Transit', color: '#686B3C', value: '30' }, // value In Persentage(%)
      ],
    },
  };
  // <END-> Transaction Bucket
  //
  //
  // <-START-> Transaction Bucket
  transactionBucket = {
    selected: 'Today',
    navList: ['Today', 'Yesterday', 'Past 7 Days', 'Month'],
    onChangeSelected: (v: any) => {
      this.salesInventoryTrend.selected = v;
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
    values: {
      verticalTitle: 'Quantity(KL)',
      verticalValues: ['0', '2,000', '4,000', '6,000', '8,000', '10,000'],
      horizontalValues: [
        { title: '<1 ltr', color: '#8554C6', value: '90' }, // value In Persentage(%)
        { title: '>=1 ltr - <5 ltr', color: '#FF9066', value: '30' }, // value In Persentage(%)
        { title: '>=5 ltr - <10 ltr', color: '#FFCA41', value: '100' }, // value In Persentage(%)
        { title: '>=10 ltr - <25 ltr', color: '#42CC7D', value: '90' }, // value In Persentage(%)
        { title: '>=25 ltr - <35 ltr', color: '#67C2E8', value: '80' }, // value In Persentage(%)
        { title: '>=25 ltr - <35 ltr', color: '#686B3C', value: '30' }, // value In Persentage(%)
      ],
    },
  };
  // <END-> Transaction Bucket
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
