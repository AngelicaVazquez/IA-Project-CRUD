import { FranjaHoraria } from '../models/franja-horaria';
import { Reserva } from '../models/reserva';
import { Sala } from '../models/sala';

export const SALAS_MOCK: Sala[] = [
  { id: 1, nombre: 'Sala 1' },
  { id: 2, nombre: 'Sala 2' },
  { id: 3, nombre: 'Sala 3' },
  { id: 4, nombre: 'Sala 4' },
  { id: 5, nombre: 'Sala 5' },
  { id: 6, nombre: 'Sala 6' },
];

export const FRANJAS_MOCK: FranjaHoraria[] = [
  { id: 1, horaInicio: '08:00', horaFin: '09:00' },
  { id: 2, horaInicio: '09:00', horaFin: '10:00' },
  { id: 3, horaInicio: '10:00', horaFin: '11:00' },
  { id: 4, horaInicio: '11:00', horaFin: '12:00' },
  { id: 5, horaInicio: '12:00', horaFin: '13:00' },
  { id: 6, horaInicio: '13:00', horaFin: '14:00' },
  { id: 7, horaInicio: '14:00', horaFin: '15:00' },
  { id: 8, horaInicio: '15:00', horaFin: '16:00' },
  { id: 9, horaInicio: '16:00', horaFin: '17:00' },
  { id: 10, horaInicio: '17:00', horaFin: '18:00' },
  { id: 11, horaInicio: '18:00', horaFin: '19:00' },
  { id: 12, horaInicio: '19:00', horaFin: '20:00' },
];

export const RESERVAS_MOCK: Reserva[] = [
  { id: 1, salaId: 1, fecha: '2026-11-27', franjaInicioId: 3, franjaFinId: 3 }, // Sala 1, 10:00-11:00
  { id: 2, salaId: 3, fecha: '2026-11-27', franjaInicioId: 3, franjaFinId: 4 }, // Sala 3, 10:00-12:00
  { id: 3, salaId: 2, fecha: '2026-11-28', franjaInicioId: 8, franjaFinId: 8 }, // Sala 2, 15:00-16:00
];