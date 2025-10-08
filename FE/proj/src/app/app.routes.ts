import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReservationsListComponent } from './pages/reservations/reservations-list.component';
import { ReservationFormComponent } from './pages/reservations/reservation-form.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'reservations', component: ReservationsListComponent },
      { path: 'reservations/new', component: ReservationFormComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },

  { path: '**', redirectTo: 'login' }
];
