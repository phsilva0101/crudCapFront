import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems = [
    { nome: 'Home', rota: '/home' },
    { nome: 'Sobre Nós', rota: '/sobre-nos' },
    { nome: 'Catálogo', rota: '/catalogo' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }



}
