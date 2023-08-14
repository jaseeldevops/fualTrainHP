import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showProfileDrower: boolean = false;
  selectedTab: string = 'settings';

  dashbordRouts = [
    { title: 'Dashboard', value: 'dashboard' },
    { title: 'Settings', value: 'settings' },
  ];
}
