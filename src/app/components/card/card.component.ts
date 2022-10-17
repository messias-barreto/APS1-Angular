import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
title: string = 'Messias Gonzaga Barreto';
matricula: string = '19101046';

  constructor() { }

  ngOnInit(): void {
  }

}
