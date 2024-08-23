import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { BooksSectionComponent } from '../books-section/books-section.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent , HeroSectionComponent , BooksSectionComponent , FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
