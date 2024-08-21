import { Component, Input } from '@angular/core';
import { Project } from './project-card.models';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project!: Project;

  constructor(private router: Router){
  }

  navigateToDetails(){
    this.router.navigate(["/project", this.project.title])
  }

}
