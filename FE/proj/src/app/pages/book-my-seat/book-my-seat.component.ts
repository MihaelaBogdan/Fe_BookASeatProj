import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-my-seat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-my-seat.component.html',
  styleUrls: ['./book-my-seat.component.css']
})
export class BookMySeatComponent implements OnInit {
  dates = ['26 Sep', '27 Sep', '28 Sep', '29 Sep', '30 Sep', '1 Oct', '2 Oct', '3 Oct'];
  selectedDate = '29 Sep';
  selectedFrom = '09:00';
  selectedTo = '17:00';
  selectedFloor = 'Etaj 1';
  selectedWorkspace = 'Open Space';

  showConfirm = false;
  showBooked = false;
  selectedSeat: any = null;

  seats: any[] = [];

  ngOnInit() {
    // încărcăm locurile salvate (ocupate)
    const saved = localStorage.getItem('bookedSeats');
    const bookedSeats = saved ? JSON.parse(saved) : [];

    // 20 locuri total
    this.seats = Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      booked: bookedSeats.includes(i + 1),
      selected: false
    }));
  }

  toggleSeat(seat: any) {
    if (seat.booked) return; // nu poți rezerva un loc deja ocupat
    this.selectedSeat = seat;
    this.showConfirm = true;
  }

  confirmBooking() {
    if (this.selectedSeat) {
      this.selectedSeat.booked = true;
      this.showConfirm = false;
      this.showBooked = true;

      // salvăm în localStorage
      const saved = localStorage.getItem('bookedSeats');
      const bookedSeats = saved ? JSON.parse(saved) : [];
      bookedSeats.push(this.selectedSeat.id);
      localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));
    }
  }

  closePopup() {
    this.showConfirm = false;
    this.showBooked = false;
  }
}
