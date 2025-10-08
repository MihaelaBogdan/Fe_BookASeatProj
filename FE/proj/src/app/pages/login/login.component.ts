import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 👈 importăm Router

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {} // injectăm Router-ul

  onLogin() {
    
    console.log('User logged in!');
    this.router.navigate(['/dashboard']); // 👈 redirecționează către Dashboard
  }

  goToRegister() {
    this.router.navigate(['/register']); // 👈 buton "Creează cont"
  }
}
