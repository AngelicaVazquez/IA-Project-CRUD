import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReservaBorradorStore } from '../../../core/services/reserva-borrador.store';

@Component({
  selector: 'app-booking-summary',
  imports: [RouterLink],
  templateUrl: './booking-summary.html',
  styleUrl: './booking-summary.css',
})
export class BookingSummary {
  protected readonly store = inject(ReservaBorradorStore);
  protected readonly confirmada = signal(false);

  protected readonly fechaTexto = computed(() => {
    const fecha = this.store.fecha();
    if (!fecha) return '—';
    return new Date(`${fecha}T00:00:00`).toLocaleDateString('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
    });
  });

  protected readonly horario = computed(() => {
    const inicio = this.store.franjaInicio();
    const fin = this.store.franjaFin();
    return inicio && fin ? `${inicio.horaInicio} – ${fin.horaFin}` : '—';
  });

  protected confirmar(): void {
    if (this.store.confirmar()) this.confirmada.set(true);
  }
}