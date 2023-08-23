import { Component } from '@angular/core';
import { dummyallPump } from './dummy';

@Component({
  selector: 'Home-fual-mr',
  templateUrl: './fual-mr.component.html',
  styleUrls: ['./fual-mr.component.css'],
})
export class FualMRComponent {
  page = 'listPumpMR'; //listPumpMR, addPumpMRFrom
  isEdit = false;

  onClickCreatePupmMR = () => {
    this.isEdit = false;
    this.page = 'addPumpMRFrom';
  };

  totalCounts = {
    allRequest: 8,
    inFreshStatus: 1,
    pendingforApproval: 3,
    approvedRequest: 5,
    rejectedRequest: 1,
    cancelledRequest: 0,
    overdueRequest: 0,
  };

  allPump: any = dummyallPump;

  onClickTableItem = (it: any) => {
    if (it?.status === 'Pending') {
      this.isEdit = true;
      this.page = 'addPumpMRFrom';
    }
  };

  onChangePage = () => {};

  onClickCloseForm = () => {
    this.page = 'listPumpMR';
  };
  onClickSaveForm = () => {
    this.page = 'listPumpMR';
  };
  onClickSubmitForm = () => {
    this.page = 'listPumpMR';
  };
}
