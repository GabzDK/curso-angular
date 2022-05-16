import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  
  public cursos: string[] = [];
  constructor(public cursosService: CursosService = new CursosService) {
   }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
