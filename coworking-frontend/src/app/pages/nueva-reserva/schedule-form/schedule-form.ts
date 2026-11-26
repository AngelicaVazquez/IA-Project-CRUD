import { Component, inject } from '@angular/core';
import { ReservaBorradorStore } from '../../../core/services/reserva-borrador.store';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.html',
  styleUrl: './schedule-form.css',
})
export class ScheduleForm {
  protected readonly store = inject(ReservaBorradorStore);

  protected cambiarFecha(event: Event): void {
    this.store.fecha.set((event.target as HTMLInputElement).value);
  }

  protected cambiarInicio(event: Event): void {
    this.store.setInicio(Number((event.target as HTMLSelectElement).value));
  }

  protected cambiarFin(event: Event): void {
    this.store.setFin(Number((event.target as HTMLSelectElement).value));
  }
}