import { combineReducers } from 'redux';
import { ThemeReducer } from './theme/theme-reducer';


export const rootReducer = combineReducers({theme: ThemeReducer});