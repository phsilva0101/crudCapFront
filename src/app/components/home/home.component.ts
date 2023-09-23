import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [
    {
      icon: 'caminho-para-o-icone-1',
      description: 'Descrição do Card 1'
    },
    {
      icon: 'caminho-para-o-icone-2',
      description: 'Descrição do Card 2'
    },
    {
      icon: 'caminho-para-o-icone-3',
      description: 'Descrição do Card 3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
