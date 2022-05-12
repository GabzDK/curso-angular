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



  constructor() {}

  incrementa() {
    
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    if (this.valor > 0 ){
      this.valor--;
      this.mudouValor.emit({novoValor: this.valor})
    }
    else{
      alert('Não é aceito números negativos')
    }
  }
}
