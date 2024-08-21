import { Component, OnInit } from '@angular/core';
import { Project } from '../project-card/project-card.models';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
  
  project!: Project;

  constructor(
    private route: ActivatedRoute, private projectsService: ProjectsService
  ) {}
  
  ngOnInit(): void {
    const projectTitle =this.route.snapshot.paramMap.get('title')
    if (projectTitle != null) this.project = this.projectsService.getProjectByTitle(projectTitle)
  }


}
