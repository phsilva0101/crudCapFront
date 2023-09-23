import { PropertiesInsertModel, PropertiesRequestModel, PropertiesUpdateModel } from './../interfaces/Property/request/properties';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../utils/constants';
import { PaginationResponse } from '../interfaces/paginationResponse';
import { PropertiesResponseModel } from '../interfaces/Property/response/propertiesResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  constructor(private http: HttpClient) {}

  getProperties(
    params: PropertiesRequestModel
  ): Observable<PaginationResponse<PropertiesResponseModel>> {
    return this.http.get<PaginationResponse<PropertiesResponseModel>>(
      `${BASE_URL}/properties`,
      { params: params as any }
    );
  }

  getProperty(id: number): Observable<PropertiesResponseModel> {
    return this.http.get<PropertiesResponseModel>(
      `${BASE_URL}/properties/${id}`
    );
  }

  postProperty(property: PropertiesInsertModel): Observable<any> {
    return this.http.post(`${BASE_URL}/properties`, property);
  }

  putProperty(property: PropertiesUpdateModel): Observable<any> {
    return this.http.put(`${BASE_URL}/properties`, property);
  }

  deleteProperty(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/properties/${id}`);
  }
}
