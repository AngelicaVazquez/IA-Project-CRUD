import { Routes } from '@angular/router';
import { AppShell } from './layout/app-shell/app-shell';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'nueva-reserva' },
      {
        path: 'nueva-reserva',
        loadComponent: () =>
          import('./pages/nueva-reserva/nueva-reserva').then((m) => m.NuevaReserva),
      },
      {
        path: 'mis-reservas',
        loadComponent: () =>
          import('./pages/mis-reservas/mis-reservas').then((m) => m.MisReservas),
      },
      {
        path: 'cancelar-reserva',
        loadComponent: () =>
          import('./pages/cancelar-reserva/cancelar-reserva').then((m) => m.CancelarReserva),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];