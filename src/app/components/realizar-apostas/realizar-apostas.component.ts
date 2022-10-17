import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-realizar-apostas',
  templateUrl: './realizar-apostas.component.html',
  styleUrls: ['./realizar-apostas.component.css']
})
export class RealizarApostasComponent implements OnInit {
  @Input() num_botao: number[] = [];
  @Input() apostador_id: number = 0;
  @Output() botao = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  enviarNumeroBotao(value: number) {
    this.botao.emit({apostador: this.apostador_id, numerobotao: this.num_botao[value]})
  }

}
