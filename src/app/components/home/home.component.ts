import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero/home-hero.component";
import { ServicesComponent } from "../services/services.component";
import { AboutHeroComponent } from "../about-hero/about-hero.component";
import { ShowcaseComponent } from "../showcase/showcase.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent, ServicesComponent, AboutHeroComponent, ShowcaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
