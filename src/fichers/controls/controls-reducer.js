import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
    region: ''
}

const ControlsSlice = createSlice({
    name: '@@controls',
    initialState,
    reducers: {
        setSearch: (state,action) => {
            state.search = action.payload
        },
        setRegion: (state,action) => {
            state.region = action.payload
        },
        clearSearch: () => initialState
    }
})

export const {setSearch, setRegion, clearSearch } = ControlsSlice.actions;
export const controlsReducer = ControlsSlice.reducer;


export const SearchSelectors = (state) => state.controls.search

export const SearchSelectorsRegion = (state) => state.controls.region

export const SearchSelectorsControls = (state) => state.controls

