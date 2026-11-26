import { Component, computed, inject, input, output, signal } from '@angular/core';
import { Reserva } from '../../../core/models/reserva';
import { FranjasService } from '../../../core/services/franjas.service';
import { SalasService } from '../../../core/services/salas.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.html',
  styleUrl: './booking-list.css',
})
export class BookingList {
  readonly reservas = input.required<Reserva[]>();
  readonly cancelable = input(false);
  readonly cancelar = output<number>();

  private readonly salasService = inject(SalasService);
  private readonly franjasService = inject(FranjasService);

  protected readonly confirmandoId = signal<number | null>(null);

  protected readonly items = computed(() =>
    [...this.reservas()]
      .sort((a, b) => a.fecha.localeCompare(b.fecha) || a.franjaInicioId - b.franjaInicioId)
      .map((r) => {
        const sala = this.salasService.salas().find((s) => s.id === r.salaId);
        const inicio = this.franjasService.porId(r.franjaInicioId);
        const fin = this.franjasService.porId(r.franjaFinId);
        const horas = r.franjaFinId - r.franjaInicioId + 1;

        return {
          id: r.id,
          sala: sala?.nombre ?? 'Sala desconocida',
          fecha: new Date(`${r.fecha}T00:00:00`).toLocaleDateString('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
          }),
          horario: inicio && fin ? `${inicio.horaInicio} – ${fin.horaFin}` : '—',
          duracion: `${horas} ${horas === 1 ? 'hora' : 'horas'}`,
        };
      }),
  );

  protected pedirConfirmacion(id: number): void {
    this.confirmandoId.set(id);
  }

  protected descartar(): void {
    this.confirmandoId.set(null);
  }

  protected confirmarCancelacion(id: number): void {
    this.confirmandoId.set(null);
    this.cancelar.emit(id);
  }
}