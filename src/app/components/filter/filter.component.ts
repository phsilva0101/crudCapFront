import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EnumPropertyType } from 'src/app/enum/propertyType';
import { PropertiesRequestModel } from 'src/app/interfaces/Property/request/properties';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  form: FormGroup;
  propertyTypes = Object.keys(EnumPropertyType).map((key) => ({
    value: key,
    viewValue: EnumPropertyType[key as keyof typeof EnumPropertyType],
  }));

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<FilterComponent>,
    private service: PropertiesService,
    private router: Router,
    private route: ActivatedRoute) {
    this.form = this.fb.group({
      propertyType: [''],
      isParticular: [false],
      hasPool: [false],
      hasGarage: [false],
      garageSpaces: [''],
      rooms: [''],
      suites: [''],
      valueStart: [''],
      valueEnd: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const obj = this.form.value as PropertiesRequestModel; 
    obj.pageNumber = 1;
    obj.pageSize = 4;
    obj.asc = true;
    obj.orderBy = 'createdAt';

    const nonEmptyValues: { [key: string]: any } = {};
    for (const key of Object.keys(obj)) {
      const value = (obj as any)[key];
      if (value !== null && value !== undefined && value !== '') {
        nonEmptyValues[key] = value;
      }
    }

  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: nonEmptyValues,
    queryParamsHandling: 'merge', 
  });
    this.service.getProperties(obj).subscribe((res) => {
      this.dialogRef.close(res);
    });
  }
  close(){
    this.dialogRef.close();
  }
}
