import { Component, OnInit } from '@angular/core';
import { Project } from '../../services/project.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { CardComponent } from '../card/card.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, CardComponent, ProjectCardComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent implements OnInit {
  project!: Project;
  projects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const projectTitle = params.get('title');
     
      if (projectTitle != null)
        this.project = this.projectsService.getProjectByTitle(projectTitle);
     
      this.projects = this.projectsService.getProjects().filter(project => project.title != this.project.title);
    });
  }
}
