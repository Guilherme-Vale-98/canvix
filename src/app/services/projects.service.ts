import { Injectable } from '@angular/core';
import { Project } from '../components/project-card/project-card.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
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
      title: "UI design",
      subtitle: "Social Media Marketing"
    }
    ,{
      imgUrl: "assets/UI design.png",
      title: "UI design",
      subtitle: "Social Media Marketing"
    }
  ];


  getProjects(): Project[] {
    return this.projects;
  }

  getProjectByTitle(title: string): Project {
    const project = this.projects.find(project => project.title === title);
    if (!project) {
      throw new Error(`Project with title "${title}" not found.`);
    }
    return project;
  }
}
