import { Injectable, signal } from '@angular/core';
import { RESERVAS_MOCK } from '../mock/datos-mock';
import { Reserva } from '../models/reserva';

@Injectable({ providedIn: 'root' })
export class ReservasService {
  private readonly _reservas = signal<Reserva[]>(RESERVAS_MOCK);
  readonly reservas = this._reservas.asReadonly();

  crear(datos: Omit<Reserva, 'id'>): Reserva {
    const id = Math.max(0, ...this._reservas().map((r) => r.id)) + 1;
    const nueva: Reserva = { ...datos, id };
    this._reservas.update((lista) => [...lista, nueva]);
    return nueva;
  }

  cancelar(id: number): void {
    this._reservas.update((lista) => lista.filter((r) => r.id !== id));
  }

  /** Una sala está libre si ninguna reserva suya ese día se solapa con las franjas pedidas. */
  salaLibre(salaId: number, fecha: string, inicioId: number, finId: number): boolean {
    return !this._reservas().some(
      (r) =>
        r.salaId === salaId &&
        r.fecha === fecha &&
        r.franjaInicioId <= finId &&
        inicioId <= r.franjaFinId,
    );
  }
}