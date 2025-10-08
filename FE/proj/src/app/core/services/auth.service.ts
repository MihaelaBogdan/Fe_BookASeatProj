import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'demo_user';
  userSig = signal<User | null>(this.load());

  constructor(private router: Router) {}

  /** 🔹 Simulare login */
  login(email: string, password: string) {
    const isAdmin = email.toLowerCase().includes('admin');

    const mock: User = {
      id: isAdmin ? 1 : 2,
      name: isAdmin ? 'Admin User' : 'Employee User',
      email,
      role: isAdmin ? 'ADMIN' : 'EMPLOYEE',
      token: 'mock-jwt-token'
    };

    // 🔹 Setăm userul în semnal + salvăm în localStorage
    this.userSig.set(mock);
    localStorage.setItem(this.storageKey, JSON.stringify(mock));

    // 🔹 Redirecționează către dashboard după autentificare
    this.router.navigate(['/dashboard']);
  }

  /** 🔹 Logout complet + redirect */
  logout() {
    this.userSig.set(null);
    localStorage.removeItem(this.storageKey);
    this.router.navigateByUrl('/login');
  }

  /** 🔹 Returnează token-ul userului curent */
  get token() {
    return this.userSig()?.token ?? '';
  }

  /** 🔹 Returnează rolul curent (ADMIN/EMPLOYEE) */
  get role() {
    return this.userSig()?.role ?? 'EMPLOYEE';
  }

  /** 🔹 Verifică dacă userul este autentificat */
  get isLoggedIn() {
    return !!this.userSig();
  }

  /** 🔹 Încarcă userul din localStorage la pornirea aplicației */
  private load(): User | null {
    const s = localStorage.getItem(this.storageKey);
    return s ? JSON.parse(s) : null;
  }
}
