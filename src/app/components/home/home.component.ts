import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [
    {
      icon: 'fab fa-linkedin fa-2x',
      description: 'Descrição do Card 1'
    },
    {
      icon: 'fas fa-car',
      description: 'Descrição do Card 2'
    },
    {
      icon: 'fas fa-camera',
      description: 'Descrição do Card 3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
