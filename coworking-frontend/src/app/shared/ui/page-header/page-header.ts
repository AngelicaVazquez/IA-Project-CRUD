import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
  readonly etiqueta = input('');
  readonly titulo = input.required<string>();
  readonly subtitulo = input('');
}