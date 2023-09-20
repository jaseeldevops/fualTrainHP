import { Component } from '@angular/core';
import { RITDummy, allRITDummy } from './dummyData';

@Component({
  selector: 'Home-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css'],
})
export class InspectionComponent {
  page = 'ritListPage'; // ritListPage, ritFormPage

  ritSelectedTable = 'Scheduled';
  onChangeRITTable = (v: string) => {
    this.ritSelectedTable = v;
  };

  allRIT: any = allRITDummy;

  slectedRIT: any = RITDummy;

  ritSelectedCategoryCount: any = 0;
  ritSelectedCategory: any =
    this.slectedRIT?.categories?.[this.ritSelectedCategoryCount];

  onChangePage = (page: any, count: any) => {};

  onClickRITRow = (item: any) => {
    this.page = 'ritFormPage';
    this.slectedRIT = RITDummy;
  };

  onClickRITCategory = (item: any) => {
    this.ritSelectedCategory = item;
  };

  onClickFN1 = (k: any) => {
    if (this.ritSelectedCategory?.list1?.length !== k + 1) {
      // Delete Functionality
      this.ritSelectedCategory?.list1.splice(k, 1);
    } else {
      // Add Functionality
      this.ritSelectedCategory?.list1.push({});
    }
  };
  onClickFN2 = (k: any) => {
    if (this.ritSelectedCategory?.list2?.length !== k + 1) {
      // Delete Functionality
      this.ritSelectedCategory?.list2.splice(k, 1);
    } else {
      // Add Functionality
      this.ritSelectedCategory?.list2.push({});
    }
  };
  onClickFN3 = (k: any) => {
    if (this.ritSelectedCategory?.list3?.length !== k + 1) {
      // Delete Functionality
      this.ritSelectedCategory?.list3.splice(k, 1);
    } else {
      // Add Functionality
      this.ritSelectedCategory?.list3.push({});
    }
  };
  onClickFN4 = (k: any) => {
    if (this.ritSelectedCategory?.list4?.length !== k + 1) {
      // Delete Functionality
      this.ritSelectedCategory?.list4.splice(k, 1);
    } else {
      // Add Functionality
      this.ritSelectedCategory?.list4.push({});
    }
  };

  onClickNextRit = () => {
    this.ritSelectedCategoryCount++;
    this.ritSelectedCategory =
      this.slectedRIT?.categories?.[this.ritSelectedCategoryCount];
  };
}
