import { CLEAR_SEARCH, SET_REGION, SET_SEARCH } from './controls-actions'

const initializeState = {
    search: '',
    region: ''
}
export const CountriesState = (state = initializeState, {type, payload}) => {
    switch(type) {
        case SET_SEARCH: 
            return {
                ...state,
                search: payload,
            }
        case SET_REGION: 
            return {
                ...state,
                region: payload,
            }
        case CLEAR_SEARCH: 
            return initializeState
        default: 
            return state
    }
}
