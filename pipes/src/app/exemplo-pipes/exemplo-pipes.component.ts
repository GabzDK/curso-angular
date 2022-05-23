import { Component, OnInit } from '@angular/core';

import { InteropObservable, interval } from 'rxjs';



@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css'],
})
export class ExemploPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Arsène Lupin: O Ladrão de Casaca',
    rating: 4.6,
    numeroPaginas: 192,
    preco: 13.9,
    dataLancamento: new Date(2021, 0, 8),
    url: 'https://ler.amazon.com.br/kp/embed?asin=B08T4Z2CYN&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_XVKDZ35328WART9P3V7E',
  };

  constructor() {}

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000)
  });

  ngOnInit(): void {}
}