export const SET_SEARCH = '@@controls/SET_SEARCH';
export const SET_REGION = '@@controls/SET_REGION';
export const CLEAR_SEARCH = '@@controls/CLEAR_SEARCH';

export const setSearch = (params) =>  ({
    type: SET_SEARCH,
    payload: params
})        
export const setRegion = (params) =>  ({
    type: SET_REGION,
    payload: params
})        

export const clearSearch = () =>  ({
    type: CLEAR_SEARCH,
})        

