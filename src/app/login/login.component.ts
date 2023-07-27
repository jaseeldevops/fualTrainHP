import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  onLogin = (e: any) => {
    e.preventDefault();
    window.location.pathname = 'dashboard';
  };
  
}
