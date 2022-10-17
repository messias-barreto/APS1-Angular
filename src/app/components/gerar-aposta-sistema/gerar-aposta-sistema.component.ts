import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerar-aposta-sistema',
  templateUrl: './gerar-aposta-sistema.component.html',
  styleUrls: ['./gerar-aposta-sistema.component.css']
})
export class GerarApostaSistemaComponent implements OnInit {
  adicionar_numero: number[] = [];

  constructor() {
    this.gerarApostas()
  }


  gerarApostas(): void {
    let i = 0;
    while (i < 6) {
      let numero_gerado = Math.floor(Math.random() * 60) + 1;
      let valida = this.adicionar_numero.find((el: number) => el === numero_gerado);

      if (valida === undefined) {
        this.adicionar_numero.push(numero_gerado)
        i++;
      }
    }
  }

  ngOnInit(): void {
  }

}
