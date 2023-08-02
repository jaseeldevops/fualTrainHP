import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css'],
})
export class SalesDashboardComponent {
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
  //
  // <-START-> Todays Sales & Inventory
  todaySalesAndInventory = {
    selected: 'Sales',
    navList: ['Sales', 'Inventory'],
    onChangeSelected: (v: any) => {
      this.todaySalesAndInventory.selected = v;
    },
  };
  // <END-> Todays Sales & Inventory
  //
  // <-START-> Nozzle Utilisation
  // <END-> Nozzle Utilisation
  //
  // <-START-> Inventory Forecate
  inventoryForcate = {
    selected: 'Tank',
    navList: ['Tank', 'RO'],
    onChangeSelected: (v: any) => {
      this.inventoryForcate.selected = v;
    },
  };
  // <END-> Inventory Forecate
  //
  // <-START-> Top 10 Sales
  top10Sales = {
    selected: 'RO',
    navList: ['RO', 'Sales Area', 'Region', 'Zone'],
    onChangeSelected: (v: any) => {
      this.top10Sales.selected = v;
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
  // <END-> Top 10 Sales
  //
  // <-START-> Critical Stock
  criticalStock = {
    selected: 'Critical Stock',
    navList: ['Critical Stock', 'Indent Status'],
    onChangeSelected: (v: any) => {
      this.criticalStock.selected = v;
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
  // <END-> Critical Stock
  //
  // <-START-> Nano Status
  // <END-> Nano Status
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
  };
  // <END-> Stock Reconsilation
  //
  // <-START-> Price Change & Exceptions
  priceChangeAndExceptions = {
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
  // <END-> Price Change & Exceptions
  //
  // <-START-> Nil Sales
  nilSales = {
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
  // <END-> Nil Sales
  //
  // <-START-> ROMMS Complaint Status
  rommsComplaint = {
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
  // <END-> ROMMS Complaint Status
  //
  // <-START-> Sales & Inventory Trend
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
  };
  // <END-> Sales & Inventory Trend
  //
  // <-START-> TAR (Trade Account Receivable)
  tar = {
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
  // <END-> TAR (Trade Account Receivable)
  //
  // <-START-> TT Receipts SAP vs Actual and TT in top T ransit
  ttReceiptsSap = {
    selected: 'By Volume',
    navList: ['By Volume', 'By Receipts'],
    onChangeSelected: (v: any) => {
      this.ttReceiptsSap.selected = v;
    },
  };
  // <END-> TT Receipts SAP vs Actual and TT in top T ransit
}
