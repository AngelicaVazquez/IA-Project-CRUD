import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

const TITULOS: Record<string, string> = {
  '/nueva-reserva': 'Nueva reserva',
  '/mis-reservas': 'Mis reservas',
  '/cancelar-reserva': 'Cancelar reserva',
};

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  private readonly router = inject(Router);

  protected readonly titulo = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      startWith(null),
      map(() => TITULOS[this.router.url.split('?')[0]] ?? ''),
    ),
    { initialValue: '' },
  );

  protected readonly hoy = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}