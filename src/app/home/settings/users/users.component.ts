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

  onChangeUserPage = (page: any, count: any) => {
    console.log(page);
    console.log(count);
  };

  onChangeUserRolePage = (k: any) => {
    console.log(k);
  };
}
