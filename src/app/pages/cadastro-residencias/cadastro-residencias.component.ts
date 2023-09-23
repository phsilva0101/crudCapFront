import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-residencias',
  templateUrl: './cadastro-residencias.component.html',
  styleUrls: ['./cadastro-residencias.component.css'],
})
export class CadastroResidenciasComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      propertyType: ['', Validators.required],
      rooms: ['', Validators.required],
      suites: ['', Validators.required],
      hasGarage: [false],
      garageSpaces: [''],
      areaM2: ['', Validators.required],
      hasPool: [false],
      isParticular: [false],
      street: ['', Validators.required],
      neighborhood: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      zipCode: ['', Validators.required],
      cityId: ['', Validators.required],
      realEstateId: [''],
    });
  }

  ngOnInit(): void {}
}
