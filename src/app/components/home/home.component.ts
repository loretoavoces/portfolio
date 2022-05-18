import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from 'src/services/projects.service';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projects = this.projectService.getAllProjects();
  }

  printPdf() {
    const jpgUrl = 'https://res.cloudinary.com/loretoavoces/image/upload/v1652362495/prueba/Spanish_Loreto_Alvarez_CV_1_ts9kwu.png';
    const jpgName = 'CV Loreto Álvarez';
    FileSaver.saveAs(jpgUrl, jpgName);
  }

}
