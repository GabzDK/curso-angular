import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlunosComponent} from "./alunos.component";
import {AlunosRoutingModule} from "./alunos.routing.module";
import {AlunosService} from "./alunos.service";
import {AlunosFormComponent} from "./alunos-form/alunos-form.component";
import {AlunosDetalheComponent} from "./alunos-detalhe/alunos-detalhe.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunosDetalheComponent
  ],
  providers: [AlunosService],
})
export class AlunosModule {
}
