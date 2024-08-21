import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CommonModule } from '@angular/common';
import { Project } from '../project-card/project-card.models';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {
  projects: Project[] = []

  constructor(private projectService: ProjectsService){
    this.projects = this.projectService.getProjects()
  }

}
