import { PaginationResponse } from './../../interfaces/paginationResponse';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { PropertiesRequestModel } from 'src/app/interfaces/Property/request/properties';
import { PropertiesResponseModel } from 'src/app/interfaces/Property/response/propertiesResponse';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  residences!: PaginationResponse<PropertiesResponseModel>
  filters: PropertiesRequestModel = {
    pageNumber: 1,
    pageSize: 10,
    asc: true,
    orderBy: 'createdAt',
  };

  constructor(public dialog: MatDialog, private service: PropertiesService) {}

  ngOnInit(): void {
    this.getAllResidencesCatalog();
  }

  getAllResidencesCatalog(){
    this.service.getProperties(this.filters).subscribe((residences) => {
      this.residences = residences;
    });
  }

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
