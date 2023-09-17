import { Component } from '@angular/core';
import { RITDummy, allRITDummy } from './dummyData';

@Component({
  selector: 'Home-rit-master',
  templateUrl: './rit-master.component.html',
  styleUrls: ['./rit-master.component.css'],
})
export class RitMasterComponent {
  page = 'ritFormPage'; // ritListPage, ritFormPage
  allRIT: any = allRITDummy;

  ritSelectedCategory = 'salesAndStock';
  slectedRIT: any = RITDummy;

  onChangePage = (page: any, count: any) => {};

  onClickRITRow = (item: any) => {
    this.page = 'ritFormPage';
    this.slectedRIT = RITDummy;
  };

  onClickRITCategory = (item: any) => {
    this.ritSelectedCategory = item?.value;
  };
}
