import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services) },
  { path: 'providers', loadComponent: () => import('./pages/providers/providers').then(m => m.Providers) },
  { path: 'booking/:id', loadComponent: () => import('./pages/booking/booking').then(m => m.Booking) },
  { path: '**', redirectTo: '' }
];
