import { Component } from '@angular/core';
import { PageHeader } from '../../shared/ui/page-header/page-header';
import { BookingSummary } from './booking-summary/booking-summary';
import { RoomPicker } from './room-picker/room-picker';
import { ScheduleForm } from './schedule-form/schedule-form';

@Component({
  selector: 'app-nueva-reserva',
  imports: [PageHeader, ScheduleForm, RoomPicker, BookingSummary],
  templateUrl: './nueva-reserva.html',
  styleUrl: './nueva-reserva.css',
})
export class NuevaReserva {}