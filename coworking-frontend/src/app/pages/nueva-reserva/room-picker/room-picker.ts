import { Component, inject } from '@angular/core';
import { ReservaBorradorStore } from '../../../core/services/reserva-borrador.store';

@Component({
  selector: 'app-room-picker',
  templateUrl: './room-picker.html',
  styleUrl: './room-picker.css',
})
export class RoomPicker {
  protected readonly store = inject(ReservaBorradorStore);
}