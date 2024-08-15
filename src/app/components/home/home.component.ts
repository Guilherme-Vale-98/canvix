import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero/home-hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
