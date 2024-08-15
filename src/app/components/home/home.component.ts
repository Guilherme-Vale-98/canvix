import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero/home-hero.component";
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
