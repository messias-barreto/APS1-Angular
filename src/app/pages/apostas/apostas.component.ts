import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-apostas',
  templateUrl: './apostas.component.html',
  styleUrls: ['./apostas.component.css']
})

export class ApostasComponent implements OnInit {
  apostador = ['Juca', 'Amanda', 'Priscila'];
  apostadorSelecionado = 0;
  aposta: number[] = [];
  concluir_aposta = false;

  showApostas = false;
  showTabuleiroNumeros = false;
  dados = [{ id: 0, apostador: '', aposta: this.aposta }];
  apostas_pelo_sistema: number[] = [];

  numBotao = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 55, 55, 56, 57, 58, 59, 60]
  ]

  qtd_numeros_selecionados = 0;
  qtd_apostas: string = '';
  apostas_feita_pelo_sistema: number[] = [];

  constructor() { }
  selecionarJogadores(qtd_apostadores: number): void {
    for (let i = 0; i < qtd_apostadores; i++) {
      i === 0 ? this.dados = [{ id: i + 1, apostador: this.apostador[i], aposta: [] }] :
        this.dados.push({
          id: i + 1,
          apostador: this.apostador[i],
          aposta: []
        })
    }

    this.showApostas = true;
  }

  selectionarJogador(apostador: number): void {
    this.apostadorSelecionado = apostador
    this.showTabuleiroNumeros = true;
  }

  adicionarNumeroAposta(dados: { apostador: number, numerobotao: number }): void {
    const found = this.dados.find(numero => numero.id === dados.apostador)
    let validate = false;

    found !== undefined && (
      found?.aposta.length < 6 ? (
        found.aposta.forEach(el => {
          if (el === dados.numerobotao) {
            alert('Número já foi adicionado!!')
            validate = true;
          }
        })
      )

        : (alert('Quantidade total de Número foi adicionada'), validate = true)
    )
    validate === false && (
      this.dados[dados.apostador - 1].aposta.push(dados.numerobotao),
      this.qtd_numeros_selecionados++
    );
  }

  limparAposta(): void {
    this.apostas_pelo_sistema = [];
    this.qtd_numeros_selecionados = 0;
    this.concluir_aposta = false;
    this.showTabuleiroNumeros = false;

    this.dados.forEach(el => { el.aposta = [] });
  }

  gerarApostas(): void {
    let i = 0;
    let add_numeros = [];
    while (i < parseInt(this.qtd_apostas)) {
      i++;
      add_numeros.push(i)
    }

    this.apostas_pelo_sistema = add_numeros
    this.concluir_aposta = true
  }

  ngOnInit(): void { }
}
