import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-apostadores',
  templateUrl: './card-apostadores.component.html',
  styleUrls: ['./card-apostadores.component.css']
})
export class CardApostadoresComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() apostas: number[] = [];
  @Output() apostador = new EventEmitter();

  constructor() { }

  selecionarApostador() {
    this.apostador.emit(this.id)
  }

  ngOnInit(): void {
  }

}
