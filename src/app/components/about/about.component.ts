import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero/home-hero.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HomeHeroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
