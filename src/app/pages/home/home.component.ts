import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardsLinksComponent } from '../../components/cards-links/cards-links.component';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    HeaderComponent,
    CardsLinksComponent,
    FooterComponent,
    SocialMediaComponent,
  ],
})
export class HomeComponent {}
