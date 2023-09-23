import { StateModel } from "./stateModel";

export interface CityModel {
    id: string;
    name: string;
    state: StateModel;
}