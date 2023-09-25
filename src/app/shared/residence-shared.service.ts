import { Injectable } from '@angular/core';
import { PropertiesResponseModel } from '../interfaces/Property/response/propertiesResponse';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceSharedService {

  private residenceSource = new BehaviorSubject<PropertiesResponseModel | null>(null);
  currentResidence = this.residenceSource.asObservable();

  constructor() {}

  changeResidence(residence: PropertiesResponseModel) {
    this.residenceSource.next(residence);
  }
}
