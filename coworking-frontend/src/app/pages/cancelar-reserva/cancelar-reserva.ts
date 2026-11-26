import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReservasService } from '../../core/services/reservas.service';
import { BookingList } from '../../shared/ui/booking-list/booking-list';
import { PageHeader } from '../../shared/ui/page-header/page-header';

@Component({
  selector: 'app-cancelar-reserva',
  imports: [PageHeader, BookingList, RouterLink],
  templateUrl: './cancelar-reserva.html',
  styleUrl: './cancelar-reserva.css',
})
export class CancelarReserva {
  private readonly reservasService = inject(ReservasService);

  protected readonly reservas = this.reservasService.reservas;
  protected readonly cancelada = signal(false);

  protected cancelar(id: number): void {
    this.reservasService.cancelar(id);
    this.cancelada.set(true);
  }
}