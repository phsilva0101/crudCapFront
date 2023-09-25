import { PaginationResponse } from './../../interfaces/paginationResponse';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { PropertiesRequestModel } from 'src/app/interfaces/Property/request/properties';
import { PropertiesResponseModel } from 'src/app/interfaces/Property/response/propertiesResponse';
import { PropertiesService } from 'src/app/services/properties.service';
import { ResidenceSharedService } from 'src/app/shared/residence-shared.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  residences!: PaginationResponse<PropertiesResponseModel>;
  filters: PropertiesRequestModel = {
    pageNumber: 1,
    pageSize: 4,
    asc: true,
    orderBy: 'createdAt',
  };

  haMaisRegistros = true;

  constructor(public dialog: MatDialog,
     private service: PropertiesService, 
     private sharedService: ResidenceSharedService,
     private router: Router) {}

  ngOnInit(): void {
    this.getAllResidencesCatalog();
  }

  getAllResidencesCatalog() {
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
        top: `100px`,
        left: `400px`,
        right: `100px`,
      };
    }

    dialogConfig.width = '1800px';

    const dialogRef = this.dialog.open(FilterComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.residences = result;
      }
    });

  }

  close() {
    this.dialog.closeAll();
  }

  editar(residence: PropertiesResponseModel) {
    console.log(residence)
    this.sharedService.changeResidence(residence);
    this.router.navigate(['/cadastrar']);
  }

  inativar(residence: PropertiesResponseModel) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.deleteProperty(residence.id).subscribe(() => {
          this.getAllResidencesCatalog();
        });
      }
    });
  }

  carregarMaisRegistros(){
    this.filters.pageNumber++;
    this.service.getProperties(this.filters).subscribe((residences) => {
      if(residences.items.length > 0){
        this.residences.items = this.residences.items.concat(residences.items);
      }else{
        this.haMaisRegistros = false;
      }
    });
  }
}
