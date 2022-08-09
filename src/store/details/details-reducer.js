import { SET_DET_COUNTRIES, SET_DET_LOADING, SET_DET_ERROR, CLEAR_DETAILS, BORDER_COUNTRY } from './details-actions'

const initializeState = {
    status: 'qwer',
    error: null,
    currentCountry: null,
    border: []
}
export const DetailsState = (state = initializeState, {type, payload}) => {
    switch(type) {
        case SET_DET_COUNTRIES: 
            return {
                ...state,
                status: 'received',
                currentCountry: payload
            }
        case SET_DET_LOADING: 
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_DET_ERROR: 
            return {
                ...state,
                status: 'error',
                error: payload
            }
            
        case CLEAR_DETAILS: 
            return {
                initializeState
            }
        case BORDER_COUNTRY: 
            return {
                ...state,
                border: payload
            }
        default: 
            return state
    }
}