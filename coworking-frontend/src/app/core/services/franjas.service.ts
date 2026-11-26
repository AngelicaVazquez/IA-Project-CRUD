import { Injectable, signal } from '@angular/core';
import { FRANJAS_MOCK } from '../mock/datos-mock';
import { FranjaHoraria } from '../models/franja-horaria';

@Injectable({ providedIn: 'root' })
export class FranjasService {
  readonly franjas = signal<FranjaHoraria[]>(FRANJAS_MOCK).asReadonly();

  porId(id: number): FranjaHoraria | undefined {
    return this.franjas().find((f) => f.id === id);
  }
}