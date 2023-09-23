import { CountryModel } from "./countryModel";

export interface StateModel {
    id: string;
    name: string;
    initials: string;
    country: CountryModel;
}