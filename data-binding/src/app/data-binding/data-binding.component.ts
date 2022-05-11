import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://google.com';
  cursoAngular = true;
  urlImagem = 'http://placekitten.com/200/300';

  valorAtual: string = '';
  valorSalvo: string = '';

  nome: string = '';

  nomeDoCurso: string = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
  botaoClicado() {
    alert('Botao clicado!');
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }
  onMudouValor(evento : any){
    console.log(evento.novoValor)
  }

  constructor() {}

  ngOnInit(): void {}
}
