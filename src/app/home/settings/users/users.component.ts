import { Component, Input } from '@angular/core';
import { dummyRoles, dummyUsers } from './dummy';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  @Input() backToHome: any;
  page: string = 'home'; //home, rolesList, userForm

  allUsers: any = dummyUsers;
  allRoles: any = dummyRoles;

  ngOnInit() {
    this.setUserPaging(1);
    this.setRolesPaging(1);
  }

  isEdit: boolean = false;

  allRolesSelected: boolean = false;
  onClickAllRolesSelect = () => {
    this.allRolesSelected = !this.allRolesSelected;
    for (let i = 0; i < this.allRoles.data.length; i++)
      this.allRoles.data[i].selected = this.allRolesSelected;
  };

  onClickAddUser = () => {
    this.isEdit = false;
    this.page = 'userForm';
  };

  onEditUser = (it: any) => {
    this.isEdit = true;
    this.page = 'userForm';
  };
  onViewUser = (it: any) => {
    this.page = 'rolesList';
  };

  onClickCloseForm = () => {
    this.page = 'home';
  };
  onClickAddForm = () => {
    this.page = 'home';
  };
  onClickAssigneRole = () => {
    this.page = 'home';
  };

  setUserPaging = (k: number) => {
    const pg = this.allUsers?.paging || 0;
    pg.counter = [];
    const tl = pg?.total / pg?.count;
    for (let i = 1; i <= tl && i <= 10; i++) pg.counter.push(i);
  };
  setRolesPaging = (k: number) => {
    const pg = this.allRoles?.paging || 0;
    pg.counter = [];
    const tl = pg?.total / pg?.count;
    for (let i = 1; i <= tl && i <= 10; i++) pg.counter.push(i);
  };
}
