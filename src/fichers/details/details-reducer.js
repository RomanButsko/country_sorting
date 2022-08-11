import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadDefineCountries =  createAsyncThunk(
    '@@details/load-country-by-name',
    (name, {
        extra: {
            API,
            client
        }
    }) => {
        return client.get(API.searchByCountry(name))
    }
    )
    
    export const loadBorderCountries = createAsyncThunk(
        '@details/load-border-country',
        (country, {
            extra: {
                API,
                client
            }
        }) => {
            return client.get(API.filterByCode(country))
        }
        )
        
        const initialState = {
            status: 'qwer',
            error: null,
            currentCountry: null,
            border: []
        }
        
        export const DetailsState = createSlice({
            name: '@@details',
            initialState,
            reducers: {
                clearDetails: () => initialState
            },
            extraReducers: (builder) => {
        builder
            .addCase(loadDefineCountries.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadDefineCountries.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload || action.meta.error;
            })
            .addCase(loadDefineCountries.fulfilled, (state, action) => {
                state.status = 'received';
                state.currentCountry = action.payload.data[0];
            })
            .addCase(loadBorderCountries.fulfilled, (state, action) => {
                state.border = action.payload.data.map((i) => i.name);
            })
    }
})


export const {setCounties, setLoading, setError, clearDetails, borderCountry} = DetailsState.actions;
export const detailReducer = DetailsState.reducer;


export const selectAllCountries = (state) => state.details.list;
export const selectAllBorderCountries = (state) => state.details.border;
export const selectDetails = (state) => state.details;
