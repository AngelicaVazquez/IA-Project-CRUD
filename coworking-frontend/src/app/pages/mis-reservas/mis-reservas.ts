import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReservasService } from '../../core/services/reservas.service';
import { BookingList } from '../../shared/ui/booking-list/booking-list';
import { PageHeader } from '../../shared/ui/page-header/page-header';

@Component({
  selector: 'app-mis-reservas',
  imports: [PageHeader, BookingList, RouterLink],
  templateUrl: './mis-reservas.html',
  styleUrl: './mis-reservas.css',
})
export class MisReservas {
  protected readonly reservas = inject(ReservasService).reservas;
}