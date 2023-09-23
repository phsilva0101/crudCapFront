import { EnumPropertyType } from "src/app/enum/propertyType";
import { RealEstateModel } from "../../RealEstate/response/realEstateResponse";
import { CityModel } from "../../Location/cityModel";

export interface PropertiesResponseModel {
    description: string;
    value: number; 
    propertyType: EnumPropertyType; 
    number: string;
    rooms: number;
    suites: number;
    hasGarage: boolean;
    garageSpaces?: number; // Note o ? indicando que este campo é opcional.
    areaM2: number;
    hasPool: boolean;
    isParticular: boolean;
    realEstate: RealEstateModel; 
    street: string;
    neighborhood: string;
    complement: string;
    zipCode: string;
    city: CityModel;
}