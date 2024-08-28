import { Component } from '@angular/core';
import { HomeHeroComponent } from "../home-hero/home-hero.component";
import { TeamComponent } from "../team/team.component";
import { AboutHeroComponent } from "../about-hero/about-hero.component";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapStarFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIconComponent,HomeHeroComponent, TeamComponent, AboutHeroComponent],
  viewProviders: [provideIcons({bootstrapStarFill})],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
