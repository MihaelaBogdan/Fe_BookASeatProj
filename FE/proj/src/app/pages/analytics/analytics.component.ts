import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';

import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  selectedTime = '';
  selectedFloor = '';
  selectedWorkspace = '';

  times = ['Morning', 'Afternoon', 'Evening'];
  floors = ['Parter', 'Etaj 1', 'Etaj 2'];
  workspaces = ['Open Space', 'Meeting Room A', 'Meeting Room B'];

  // date exemplu pentru tabel
  reservations = [
    { employee: 'Angajat 1', date: '23 Septembrie', seat: 'Birou 12', room: 'Open Space' },
    { employee: 'Angajat 2', date: '23 Septembrie', seat: 'Birou 5', room: 'Meeting Room A' },
    { employee: 'Angajat 3', date: '25 Septembrie', seat: 'Birou 7', room: 'Open Space' },
  ];

  // 🔹 Config grafic
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'],
    datasets: [
      {
        label: 'Ocupare (%)',
        data: [20, 35, 70, 90, 55, 40, 60],
        borderColor: '#1f4d52',
        backgroundColor: 'rgba(31,77,82,0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Ocupare (%)' } },
      x: { title: { display: true, text: 'Zile' } }
    }
  };
}
