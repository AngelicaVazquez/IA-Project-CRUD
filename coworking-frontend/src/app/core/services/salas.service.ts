import { Injectable, signal } from '@angular/core';
import { SALAS_MOCK } from '../mock/datos-mock';
import { Sala } from '../models/sala';

@Injectable({ providedIn: 'root' })
export class SalasService {
  readonly salas = signal<Sala[]>(SALAS_MOCK).asReadonly();
}