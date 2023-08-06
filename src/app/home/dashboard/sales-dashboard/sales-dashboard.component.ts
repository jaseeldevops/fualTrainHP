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
    values: {
      verticalTitle: 'Volume (KL)',
      verticalValues: ['0', '2000', '4000', '6000'],
      horizontalValues: [
        {
          title: 'HSD',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
          ],
        },
        {
          title: 'MS',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
          ],
        },
        {
          title: 'POWER',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
          ],
        },
        {
          title: 'POWER 99',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
          ],
        },
        {
          title: 'POWER 100',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
          ],
        },
        {
          title: 'TURBOJET',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
          ],
        },
      ],
      titles: [
        { title: 'Indents placed', color: '#4149E1' },
        { title: 'Indents executed', color: '#49A149' },
      ],
    },
  };
  // <END-> Todays Sales & Inventory
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
  };
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
    values: [
      {
        name: 'SAISH PETROLEUM',
        color: '#288BE2',
        code: '12598620',
        value: '1234',
        value2: '4321',
        graphLength: '80', // in Persentage(%)
      },
      {
        name: 'KARFULE PRIVATE LTD',
        color: '#02CCB1',
        code: '11010210',
        value: '1234',
        value2: '4321',
        graphLength: '100', // in Persentage(%)
      },
      {
        name: 'AUTOMOBILE CENTER',
        color: '#E84F6E',
        code: '11010210',
        value: '1234',
        value2: '4321',
        graphLength: '40', // in Persentage(%)
      },
      {
        name: 'SUPER SERVICE STATION',
        color: '#F8872B',
        code: '12119411',
        value: '1234',
        value2: '4321',
        graphLength: '50', // in Persentage(%)
      },
      {
        name: 'NATIONAL AUTOMOBILES',
        color: '#FEBB20',
        code: '12119411',
        value: '1234',
        value2: '4321',
        graphLength: '60', // in Persentage(%)
      },
      {
        name: 'SUPER FUEL STATION',
        color: '#8674FE',
        code: '11008120',
        value: '1234',
        value2: '4321',
        graphLength: '80', // in Persentage(%)
      },
      {
        name: 'MARUTHI GOLDEN',
        color: '#C14233',
        code: '13119010',
        value: '1234',
        value2: '4321',
        graphLength: '20', // in Persentage(%)
      },
      {
        name: 'FUEL WIND',
        color: '#C14233',
        code: '11058020',
        value: '1234',
        value2: '4321',
        graphLength: '30', // in Persentage(%)
      },
      {
        name: 'NEW ENERGEY',
        color: '#74C5A0',
        code: '12119411',
        value: '1234',
        value2: '4321',
        graphLength: '90', // in Persentage(%)
      },
      {
        name: 'FORCE FUEL',
        color: '#67C2E8',
        code: '12119411',
        value: '1234',
        value2: '4321',
        graphLength: '30', // in Persentage(%)
      },
    ],
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
    values: {
      title1: 'HSD',
      title2: '102 Tanks',
      title3: '36 RO',
      list: [
        { title: 'HSD', color: '#5470C6', value: 20 }, //Value in pecentage
        { title: 'MS', color: '#49A149', value: 30 }, //Value in pecentage
        { title: 'POWER', color: '#DF5041', value: 10 }, //Value in pecentage
        { title: 'POWER 99', color: '#9B3F37', value: 20 }, //Value in pecentage
        { title: 'POWER 100', color: '#ECBB38', value: 10 }, //Value in pecentage
        { title: 'TURBO JET', color: '#443C6B', value: 10 }, //Value in pecentage
      ],
    },
  };
  // <END-> Critical Stock
  //
  // <-START-> Nano Status
  nanaStatus = {
    values: {
      title1: 'HSD',
      title2: '102 Tanks',
      title3: '36 RO',
      list: [
        { title: 'HSD', color: '#97CBB3', value: 70 }, //Value in pecentage
        { title: 'MS', color: '#67C2E8', value: 20 }, //Value in pecentage
        { title: 'POWER', color: '#4087A5', value: 10 }, //Value in pecentage
      ],
    },
  };
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
    values: {
      title1: 'HSD',
      title2: '102 Tanks',
      title3: '36 RO',
      list: [
        { title: 'HSD', color: '#74C5A0', value: 80 }, //Value in pecentage
        { title: 'MS', color: '#F0534A', value: 20 }, //Value in pecentage
      ],
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
    values: {
      title1: 'HSD',
      title2: '102 Tanks',
      title3: '36 RO',
      list: [
        { title: 'HSD', color: '#5470C6', value: 20 }, //Value in pecentage
        { title: 'MS', color: '#49A149', value: 30 }, //Value in pecentage
        { title: 'POWER', color: '#DF5041', value: 10 }, //Value in pecentage
        { title: 'POWER 99', color: '#9B3F37', value: 20 }, //Value in pecentage
        { title: 'POWER 100', color: '#ECBB38', value: 10 }, //Value in pecentage
        { title: 'TURBO JET', color: '#443C6B', value: 10 }, //Value in pecentage
      ],
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
    values: {
      verticalTitle: 'RO COUNT',
      verticalValues: ['0', '2,000', '4,000', '6,000', '8,000', '10,000'],
      horizontalValues: [
        { title: 'Total nil sale', color: '#8554C6', value: '90' }, // value In Persentage(%)
        { title: 'No transaction Last 7 Days', color: '#FF9066', value: '30' }, // value In Persentage(%)
        { title: 'No transaction Last 2 Days', color: '#FFCA41', value: '80' }, // value In Persentage(%)
      ],
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
    values: {
      verticalTitle: 'RO COUNT',
      verticalValues: ['0', '2,000', '4,000', '6,000', '8,000', '10,000'],
      horizontalValues: [
        { title: 'Total complants', color: '#8554C6', value: '90' }, // value In Persentage(%)
        { title: 'Resolved', color: '#FF9066', value: '30' }, // value In Persentage(%)
        { title: 'Pending', color: '#FFCA41', value: '80' }, // value In Persentage(%)
      ],
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
    values: [
      {
        color: '#8674FE',
        title: 'Central',
        value: 'RO 5412 ( 102.2 Cr)',
        subValue: '',
        valuePersentage: 20,
      },
      {
        color: '#FF9066',
        title: 'East',
        value: '4125',
        subValue: '( Critical Stock 10 )',
        valuePersentage: 100,
      },
      {
        color: '#FFCA41',
        title: 'East Central',
        value: '3824',
        subValue: '',
        valuePersentage: 100,
      },
      {
        color: '#42CC7D',
        title: 'North',
        value: '3452',
        subValue: '',
        valuePersentage: 20,
      },
      {
        color: '#67C2E8',
        title: 'North Central',
        value: '3324',
        subValue: '( Critical Stock 02 )',
        valuePersentage: 20,
      },
      {
        color: '#FE9074',
        title: 'North Frontier',
        value: '3014',
        subValue: '',
        valuePersentage: 20,
      },
      {
        color: '#8674FE',
        title: 'Central',
        value: 'RO 5412 ( 102.2 Cr)',
        subValue: '',
        valuePersentage: 20,
      },
      {
        color: '#8674FE',
        title: 'Central',
        value: 'RO 5412 ( 102.2 Cr)',
        subValue: '',
        valuePersentage: 20,
      },
      {
        color: '#FE9074',
        title: 'North Frontier',
        value: '3014',
        subValue: '',
        valuePersentage: 20,
      },
    ],
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
    values: {
      verticalTitle: 'Number of receipts',
      verticalValues: ['0', '50', '100', '150', '200', '250'],
      horizontalValues: [
        {
          title: 'HSD',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
            { value: '67', percentage: 20, color: '#D43A2A' },
            { value: '56', percentage: 50, color: '#9B3F37' },
            { value: '234', percentage: 60, color: '#ECBB38' },
            { value: '457', percentage: 30, color: '#FF9066' },
          ],
        },
        {
          title: 'MS',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
            { value: '67', percentage: 20, color: '#D43A2A' },
            { value: '56', percentage: 50, color: '#9B3F37' },
            { value: '234', percentage: 60, color: '#ECBB38' },
            { value: '457', percentage: 30, color: '#FF9066' },
          ],
        },
        {
          title: 'POWER',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
            { value: '67', percentage: 20, color: '#D43A2A' },
            { value: '56', percentage: 50, color: '#9B3F37' },
            { value: '234', percentage: 60, color: '#ECBB38' },
            { value: '457', percentage: 30, color: '#FF9066' },
          ],
        },
        {
          title: 'POWER 99',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
            { value: '67', percentage: 20, color: '#D43A2A' },
            { value: '56', percentage: 50, color: '#9B3F37' },
            { value: '234', percentage: 60, color: '#ECBB38' },
            { value: '457', percentage: 30, color: '#FF9066' },
          ],
        },
        {
          title: 'POWER 100',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
            { value: '67', percentage: 20, color: '#D43A2A' },
            { value: '56', percentage: 50, color: '#9B3F37' },
            { value: '234', percentage: 60, color: '#ECBB38' },
            { value: '457', percentage: 30, color: '#FF9066' },
          ],
        },
        {
          title: 'TURBOJET',
          values: [
            { value: '234', percentage: 10, color: '#4149E1' },
            { value: '45', percentage: 100, color: '#49A149' },
            { value: '67', percentage: 20, color: '#D43A2A' },
            { value: '56', percentage: 50, color: '#9B3F37' },
            { value: '234', percentage: 60, color: '#ECBB38' },
            { value: '457', percentage: 30, color: '#FF9066' },
          ],
        },
      ],
      titles: [
        { title: 'Indents placed', color: '#4149E1' },
        { title: 'Indents executed', color: '#49A149' },
        { title: 'Idents on hold', color: '#D43A2A' },
        { title: 'Pending indents', color: '#9B3F37' },
        { title: 'Indents received', color: '#ECBB38' },
        { title: 'In Transit', color: '#FF9066' },
      ],
    },
  };
  // <END-> TT Receipts SAP vs Actual and TT in top T ransit
}
