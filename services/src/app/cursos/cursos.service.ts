import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
