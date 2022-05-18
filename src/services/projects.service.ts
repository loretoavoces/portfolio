import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { PROJECTS } from 'src/app/../db/projects.db';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getAllProjects(): Project[] {
    return PROJECTS
  }
}
