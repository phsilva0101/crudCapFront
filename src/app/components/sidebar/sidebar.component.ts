import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems = [
    { nome: 'Home', rota: '/home' },
    { nome: 'Catálogo', rota: '/catalogo' },
    { nome: 'Cadastrar', rota: '/cadastrar' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }



}
