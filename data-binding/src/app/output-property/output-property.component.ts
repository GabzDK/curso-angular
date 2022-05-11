import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent {

  @Input() valor: number = 0;

  @Output() mudouValor: any = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: HTMLElement = new HTMLElement();

  constructor() {}

  incrementa() {
    console.log(this.campoValorInput);
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
  }
}
