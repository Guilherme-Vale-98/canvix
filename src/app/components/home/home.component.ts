import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero/home-hero.component";
import { ServicesComponent } from "../services/services.component";
import { AboutHeroComponent } from "../about-hero/about-hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent, ServicesComponent, AboutHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
