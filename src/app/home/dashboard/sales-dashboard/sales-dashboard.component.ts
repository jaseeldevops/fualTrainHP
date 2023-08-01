import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css'],
})
export class SalesDashboardComponent {
  // <-START-> Site Status
  // <END-> Site Status
  //
  // <-START-> Tank & Ullage Status
  tankAndUllage = {
    selected: 0,
    onChangeSelected: (v: any) => {
      this.tankAndUllage.selected = v;
    },
  };
  // <END-> Tank & Ullage Status
  //
  // <-START-> DU & Nozzle Status
  duAndNozzzle = {
    selected: 0,
    onChangeSelected: (v: any) => {
      this.duAndNozzzle.selected = v;
    },
    onChangeDropDown: (e: any) => {
      console.log(e.target.value);
    },
  };
  // <END-> DU & Nozzle Status
  //
  // <-START-> Todays Sales & Inventory
  // <END-> Todays Sales & Inventory
  //
  // <-START-> Nozzle Utilisation
  // <END-> Nozzle Utilisation
  //
  // <-START-> Inventory Forecate
  // <END-> Inventory Forecate
  //
  // <-START-> Top 10 Sales
  // <END-> Top 10 Sales
  //
  // <-START-> Critical Stock
  // <END-> Critical Stock
  //
  // <-START-> Nano Status
  // <END-> Nano Status
  //
  // <-START-> Stock Reconsilation
  // <END-> Stock Reconsilation
  //
  // <-START-> Price Change & Exceptions
  // <END-> Price Change & Exceptions
  //
  // <-START-> Nil Sales
  // <END-> Nil Sales
  //
  // <-START-> ROMMS Complaint Status
  // <END-> ROMMS Complaint Status
  //
  // <-START-> Sales & Inventory Trend
  // <END-> Sales & Inventory Trend
  //
  // <-START-> TAR (Trade Account Receivable)
  // <END-> TAR (Trade Account Receivable)
  //
  // <-START-> TT Receipts SAP vs Actual and TT in top T ransit
  // <END-> TT Receipts SAP vs Actual and TT in top T ransit
}
