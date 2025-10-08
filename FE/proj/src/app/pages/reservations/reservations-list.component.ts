import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations-list',
  standalone: true,
  template: `
    <h2>Reservations List</h2>
    @for (item of reservations; track item) {
      <p>{{ item }}</p>
    } @empty {
      <p>No reservations found.</p>
    }
  `
})
export class ReservationsListComponent {
  reservations = ['Meeting Room A', 'Desk 12', 'Conference B'];
}
