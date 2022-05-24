import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const APP_ROUTES: Routes = [
    {path: 'cursos', component: CursosComponent},
    {path: 'curso/:id', component: CursoDetalheComponent},
    {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    {path: 'login', component: LoginComponent},
    { path : '', component: HomeComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
