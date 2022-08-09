import { searchByCountry } from './../../config';

export const SET_DET_COUNTRIES = '@@country/SET_DET_COUNTRIES'
export const SET_DET_LOADING = '@@country/SET_DET_LOADING'
export const SET_DET_ERROR = '@@country/SET_DET_ERROR'
export const CLEAR_DETAILS = '@@country/CLEAR_DETAILS'
export const BORDER_COUNTRY = '@@country/BORDER_COUNTRY'

export const setCounties = (country) => ({type: SET_DET_COUNTRIES, payload: country});
export const setLoading = () => ({type: SET_DET_LOADING});
export const setError = (err) => ({type: SET_DET_ERROR, payload: err});
export const clearDetails = () => ({type: CLEAR_DETAILS});
export const borderCountry = (country) => ({type: BORDER_COUNTRY, payload: country});


export const loadCountries = (name) => (dispatch, _, {client, API}) => {
    dispatch(setLoading());

    client.get(searchByCountry(name))
        .then(({data}) => dispatch(setCounties(data[0])))
        .catch((err) => dispatch(setError(err.message)))
}

export const loadBorderCountries = (country) => (dispatch, _, {client, API}) => {
    client.get(API.filterByCode(country))
        .then(({data}) => dispatch(borderCountry(data.map((i) => i.name))))
        .catch(console.error)
}