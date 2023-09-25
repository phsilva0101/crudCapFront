import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EnumPropertyType } from 'src/app/enum/propertyType';
import {
  PropertiesInsertModel,
  PropertiesUpdateModel,
} from 'src/app/interfaces/Property/request/properties';
import { PropertiesService } from 'src/app/services/properties.service';
import { ResidenceSharedService } from 'src/app/shared/residence-shared.service';

@Component({
  selector: 'app-cadastro-residencias',
  templateUrl: './cadastro-residencias.component.html',
  styleUrls: ['./cadastro-residencias.component.css'],
})
export class CadastroResidenciasComponent implements OnInit {
  form: FormGroup;
  propertyTypes = Object.keys(EnumPropertyType).map((key) => ({
    value: key,
    viewValue: EnumPropertyType[key as keyof typeof EnumPropertyType],
  }));
  isEdit = false;
  id: any = '';
  constructor(
    private fb: FormBuilder,
    private service: PropertiesService,
    private snackBar: MatSnackBar,
    private router: Router,
    private sharedService: ResidenceSharedService
  ) {
    this.form = this.fb.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      propertyType: ['', Validators.required],
      rooms: [0, Validators.required],
      suites: [0, Validators.required],
      hasGarage: [false],
      garageSpaces: [0, [Validators.min(1)]],
      areaM2: ['', Validators.required],
      hasPool: [false],
      isParticular: [false],
      street: ['', Validators.required],
      neighborhood: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      zipCode: ['', [Validators.required, Validators.minLength(8)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      initials: ['', Validators.required],
      realEstateId: [null],
    });
  }

  ngOnInit(): void {
    this.sharedService.currentResidence.subscribe((residence) => {
      if (residence) {
        this.form.patchValue({
          ...residence,
          city: residence.city.name,
          state: residence.city.state.name,
          initials: residence.city.state.initials,
        });
        this.id = residence.id;
        this.isEdit = true;
      }
    });
    this.fieldsEditable();
  }

  fieldsEditable() {
    if (this.isEdit) {
      this.form.disable();
      this.form.get('description')?.enable();
      this.form.get('value')?.enable();
      this.form.get('rooms')?.enable();
      this.form.get('suites')?.enable();
      this.form.get('garageSpaces')?.enable();
    } else {
      this.form.enable();
    }
  }

  save() {
    if (this.isEdit) {
      const obj = this.form.value as PropertiesUpdateModel;
      obj.id = this.id;
      
      this.service.putProperty(obj).subscribe(
        (response) => {
          this.snackBar.open('Imóvel atualizado com sucesso!', 'Fechar', {
            duration: 3000,
          });
          this.router.navigate(['/catalogo']);
        },
        (error) => {
          this.snackBar.open('Erro ao atualizar imóvel!', 'Fechar', {
            duration: 3000,
          });
        }
      );
    } else {
      const obj = this.form.value as PropertiesInsertModel;

      this.service.postProperty(obj).subscribe(
        (response) => {
          this.snackBar.open('Imóvel cadastrado com sucesso!', 'Fechar', {
            duration: 3000,
          });

          this.router.navigate(['/catalogo']);
        },
        (error) => {
          this.snackBar.open('Erro ao cadastrar imóvel!', 'Fechar', {
            duration: 3000,
          });
        }
      );
    }
  }

  searchZipCode() {
    const zipCode = this.form.get('zipCode')?.value;
    this.service.getAddressByZipCode(zipCode).subscribe((response) => {
      this.form.patchValue({
        street: response.logradouro,
        neighborhood: response.bairro,
        complement: response.complemento,
        city: response.localidade,
        state: response.uf,
        initials: response.uf,
        cityId: response.ibge,
      });
    });
  }

  ngOnDestroy(): void {
    this.isEdit = false;
  }
}
