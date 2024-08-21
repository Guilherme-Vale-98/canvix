import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CommonModule } from '@angular/common';
import { Project } from '../project-card/project-card.models';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {
projects: Project[] = [
  {
    imgUrl: "assets/web ui design.png",
    title: "Web UI design",
    subtitle: "Creative UI design"
  }
  ,{
    imgUrl: "assets/digital strategy.png",
    title: "To design Digital Strategy",
    subtitle: "Social Media Marketing"
  }
  ,{
    imgUrl: "assets/UI design 2.png",
    title: "To design Digital Strategy",
    subtitle: "Social Media Marketing"
  }
  ,{
    imgUrl: "assets/UI design.png",
    title: "To design Digital Strategy",
    subtitle: "Social Media Marketing"
  }
];

}
