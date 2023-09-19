import { Component } from '@angular/core';
import { RITDummy, allRITDummy } from './dummyData';

@Component({
  selector: 'Home-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css'],
})
export class InspectionComponent {
  page = 'ritFormPage'; // ritListPage, ritFormPage
  allRIT: any = allRITDummy;

  slectedRIT: any = RITDummy;
  ritSelectedCategory: any = this.slectedRIT?.categories?.[1];

  onChangePage = (page: any, count: any) => {};

  onClickRITRow = (item: any) => {
    this.page = 'ritFormPage';
    this.slectedRIT = RITDummy;
  };

  onClickRITCategory = (item: any) => {
    this.ritSelectedCategory = item;
  };

  onClickFN1 = (k: any) => {
    if (this.ritSelectedCategory?.list2?.length !== k + 1) {
      // Delete Functionality
      this.ritSelectedCategory?.list2.splice(k, 1);
    } else {
      // Add Functionality
      this.ritSelectedCategory?.list2.push({});
    }
  };
}
