import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  residences = [
    { 
      image: '../../../assets/foto1.jpg', 
      price: 'R$ 500.000', 
      bedrooms: 3, 
      sqMeters: 120, 
      location: 'São Paulo, SP'
    },
    // ... outros objetos de residências
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  openFilterModal() {
    // Adicione aqui a lógica para abrir o modal de filtro
  }

}
