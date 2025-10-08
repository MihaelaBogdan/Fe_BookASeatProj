import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <h2>Profile</h2>
    @if (user) {
      <p><b>Name:</b> {{ user.name }}</p>
      <p><b>Email:</b> {{ user.email }}</p>
      <p><b>Role:</b> {{ user.role }}</p>
    } @else {
      <p>No user logged in.</p>
    }
  `
})
export class ProfileComponent {
  constructor(private auth: AuthService) {}
  get user() { return this.auth.userSig(); }
}
