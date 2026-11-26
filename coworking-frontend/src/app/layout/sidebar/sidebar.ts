import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  protected readonly enlaces = [
    { ruta: '/mis-reservas', texto: 'Mis reservas', icono: 'calendario' },
    { ruta: '/nueva-reserva', texto: 'Nueva reserva', icono: 'mas' },
    { ruta: '/cancelar-reserva', texto: 'Cancelar reserva', icono: 'cancelar' },
  ];
}