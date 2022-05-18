import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];


  constructor(private logService: LogService = new LogService){}

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos')
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Curso ${curso} adicionado`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso); 
  }
}
