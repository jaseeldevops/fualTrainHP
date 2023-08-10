import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  onLogin = (e: any) => {
    e.preventDefault();
    console.log(e.target.userName.value);
    window.localStorage.setItem('userType', e.target.userName.value);
    window.location.pathname = 'dashboard';
  };
}
