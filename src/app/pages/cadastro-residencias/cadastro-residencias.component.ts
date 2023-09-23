import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnumPropertyType } from 'src/app/enum/propertyType';
import { PropertiesService } from 'src/app/services/properties.service';

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
  constructor(private fb: FormBuilder, private service: PropertiesService) {
    this.form = this.fb.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      propertyType: ['', Validators.required],
      rooms: ['', Validators.required],
      suites: ['', Validators.required],
      hasGarage: [false],
      garageSpaces: [{ value: '' }, [Validators.min(1)]],
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

  save() {
    console.log(this.form.value);
    this.service.postProperty(this.form.value).subscribe((response) => {
      alert('Imóvel cadastrado com sucesso!')
    });
  }
}
