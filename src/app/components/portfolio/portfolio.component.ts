import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../services/project.model';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectsService: ProjectsService
  ) {}
  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
