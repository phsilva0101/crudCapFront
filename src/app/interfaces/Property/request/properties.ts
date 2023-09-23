import { EnumPropertyType } from '../../../enum/propertyType';
import { BaseModel } from '../../baseModel';

export interface PropertiesRequestModel extends BaseModel {
  realEstateId?: any;
  propertyType?: EnumPropertyType | null;
  cityId?: string;
  stateId?: string;
  countryId?: string;
  isParticular?: boolean;
  hasPool?: boolean;
  hasGarage?: boolean;
  garageSpaces?: number;
  rooms?: number;
  suites?: number;
  valueInitial?: number;
  valueEnd?: number;
}

export interface PropertiesInsertModel {
  description: string;
  value: number;
  propertyType: EnumPropertyType;
  number: string;
  rooms: number;
  suites: number;
  hasGarage: boolean;
  garageSpaces?: number;
  areaM2: number;
  hasPool: boolean;
  isParticular: boolean;
  street: string;
  neighborhood: string;
  complement: string;
  zipCode: string;
  cityId: string;
  realEstateId?: string;
}

export interface PropertiesUpdateModel {
  id: string;
  description: string;
  value: number;
  garageSpaces?: number;
  rooms: number;
  suites: number;
}
