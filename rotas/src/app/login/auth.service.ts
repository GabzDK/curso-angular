import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Usuario} from "./usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' &&
    usuario.senha === '12345'){
      this.usuarioAutenticado = true;

      this.router.navigate(['/'])
    }
  }

  constructor(private router: Router) { }
}
