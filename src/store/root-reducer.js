import { combineReducers } from 'redux';
import { CountriesState } from './countries/countries-reducer';
import { DetailsState } from './details/details-reducer';
import { ThemeReducer } from './theme/theme-reducer';


export const rootReducer = combineReducers({theme: ThemeReducer, countries: CountriesState, controls: CountriesState, details: DetailsState});