import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  userType = window.localStorage.getItem('userType') || 'sales'; // sales, retailEngineering, comco
  onClickFilter = () => {};
}
