import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { BooksSectionComponent } from '../books-section/books-section.component';
import { FooterComponent } from '../footer/footer.component';
import { CartserviceService } from '../services/CartService/cartservice.service';
import { GamesSectionComponent } from '../games-section/games-section.component';
import { HandmadeSectionComponent } from '../handmade-section/handmade-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BooksSectionComponent, GamesSectionComponent, HandmadeSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
