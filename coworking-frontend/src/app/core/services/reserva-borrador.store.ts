import { computed, inject, Injectable, signal } from '@angular/core';
import { Reserva } from '../models/reserva';
import { FranjasService } from './franjas.service';
import { ReservasService } from './reservas.service';
import { SalasService } from './salas.service';

@Injectable({ providedIn: 'root' })
export class ReservaBorradorStore {
  private readonly salasService = inject(SalasService);
  private readonly franjasService = inject(FranjasService);
  private readonly reservasService = inject(ReservasService);

  /** Fecha de hoy en formato "2026-11-26" (hora local). */
  readonly hoy = new Date().toLocaleDateString('sv-SE');

  readonly fecha = signal(this.hoy);
  readonly franjaInicioId = signal(3); // 10:00
  readonly franjaFinId = signal(3); // hasta las 11:00
  readonly salaId = signal<number | null>(null);

  readonly franjas = this.franjasService.franjas;

  /** En "Hasta" solo se ofrecen franjas iguales o posteriores a la de inicio. */
  readonly franjasFin = computed(() =>
    this.franjas().filter((f) => f.id >= this.franjaInicioId()),
  );

  readonly franjaInicio = computed(() => this.franjasService.porId(this.franjaInicioId()));
  readonly franjaFin = computed(() => this.franjasService.porId(this.franjaFinId()));
  readonly duracion = computed(() => this.franjaFinId() - this.franjaInicioId() + 1);
  readonly fechaValida = computed(() => this.fecha() >= this.hoy);

  readonly salasDisponibles = computed(() => {
    if (!this.fechaValida()) return [];
    return this.salasService
      .salas()
      .filter((s) =>
        this.reservasService.salaLibre(s.id, this.fecha(), this.franjaInicioId(), this.franjaFinId()),
      );
  });

  /** Si la sala elegida deja de estar libre al cambiar el horario, vuelve a null. */
  readonly salaSeleccionada = computed(
    () => this.salasDisponibles().find((s) => s.id === this.salaId()) ?? null,
  );

  readonly puedeConfirmar = computed(() => this.salaSeleccionada() !== null);

  setInicio(id: number): void {
    this.franjaInicioId.set(id);
    if (this.franjaFinId() < id) this.franjaFinId.set(id);
  }

  setFin(id: number): void {
    this.franjaFinId.set(id);
  }

  confirmar(): Reserva | null {
    const sala = this.salaSeleccionada();
    if (!sala) return null;

    const reserva = this.reservasService.crear({
      salaId: sala.id,
      fecha: this.fecha(),
      franjaInicioId: this.franjaInicioId(),
      franjaFinId: this.franjaFinId(),
    });
    this.salaId.set(null);
    return reserva;
  }
}