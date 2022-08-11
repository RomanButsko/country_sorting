import axios from 'axios';
import * as API from './config';
import { configureStore } from '@reduxjs/toolkit'
import { controlsReducer } from './fichers/controls/controls-reducer';
import { themeReducer } from './fichers/Theme/theme-reducer';
import { countriesReducer } from './fichers/countries/countries-reducer';
import { detailReducer } from './fichers/details/details-reducer';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
          extraArgument: {
            client: axios, 
            API
          } 
      },
      serializableCheck: false,
  })}
)

export {store}