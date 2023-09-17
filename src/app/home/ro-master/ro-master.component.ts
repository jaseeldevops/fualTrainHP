import { Component } from '@angular/core';
import { allRODerailsDummy } from './dummyData';

@Component({
  selector: 'Home-ro-master',
  templateUrl: './ro-master.component.html',
  styleUrls: ['./ro-master.component.css'],
})
export class RoMasterComponent {
  page = 'listPage'; // listPage, addPage
  isEdit = false;
  formSelectedTab = 0;

  allRODerails: any = allRODerailsDummy;

  onChangePage = () => {};

  onClickNewRO = () => {
    this.formSelectedTab = 0;
    this.page = 'addPage';
  };

  onClickCloseForm = () => {
    this.page = 'listPage';
  };
  onClickAddForm = () => {
    this.formSelectedTab++;
  };
}
