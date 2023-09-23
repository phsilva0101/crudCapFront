import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  form: FormGroup;
  realEstateOptions = ['Opção 1', 'Opção 2'];
  propertyTypeOptions = ['Tipo 1', 'Tipo 2'];
  cityOptions = ['Cidade 1', 'Cidade 2'];
  stateOptions = ['Estado 1', 'Estado 2'];
  countryOptions = ['País 1', 'País 2'];
  numeroDeColunas: number = 2;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      realEstate: [''],
      propertyType: [''],
      city: [''],
      state: [''],
      country: [''],
      isParticular: [false],
      hasPool: [false],
      hasGarage: [false],
      garageSpaces: [''],
      rooms: [''],
      suites: [''],
      valueRange: [''],
    });
  }

  ngOnInit(): void {}
}
