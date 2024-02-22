import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-links',
  standalone: true,
  templateUrl: './cards-links.component.html',
  styleUrl: './cards-links.component.css',
  imports: [],
})
export class CardsLinksComponent {
  @Input() linkcard: string = '';
  @Input() fotocard: string = '';
  @Input() altfoto: string = '';
  @Input() textcard: string = '';
}
