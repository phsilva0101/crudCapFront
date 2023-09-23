import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilterComponent } from 'src/app/components/filter/filter.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  residences = [
    {
      image: '../../../assets/foto1.jpg',
      price: 'R$ 500.000',
      bedrooms: 3,
      sqMeters: 120,
      location: 'São Paulo, SP',
    },
    // ... outros objetos de residências
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openFilterModal() {
    console.log('Abrindo modal de filtro');

    const dialogConfig = new MatDialogConfig();

    // Obtem a posição do botão na tela
    const buttonElement = document.querySelector('.filter button');
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      // Configura a posição do modal baseado na posição do botão
      dialogConfig.position = {
        top: `5px`,
        left: `10px`,
      };
    }

    dialogConfig.width = '1800px';

    this.dialog.open(FilterComponent, dialogConfig);
  }

  close() {
    this.dialog.closeAll();
  }
}
