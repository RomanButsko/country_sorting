import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = { 
    status: 'qwer',
    error: null,
    list: [],
}

export const loadCountries = createAsyncThunk(
    '@@controls/loadCountries',
     (_, {
        extra: {client, API}
    }) => {
      return client.get(API.ALL_COUNTRIES)
    },
)

const CountriesState = createSlice({
    name: '@@countries',
    initialState,
    reducers: {
        setCounties: (state ,action) => {
            state.list = action.payload.data
        },
        setLoading: () => {},
        setError: (state,action) => {
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountries.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountries.fulfilled, (state, action) => {
                state.status = 'received';
                state.list = action.payload.data;
            })
            .addCase(loadCountries.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.meta.error
            })
    }
})

export const {setCounties, setLoading, setError} = CountriesState.actions;
export const countriesReducer = CountriesState.reducer;


export const selectAllCountries = (state) => state.countries.list;

export const selectCountries = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qwer: state.countries.list.length,
}) 

export const SearchAllSelectors = (state, {search = '', region = ''}) => {
    debugger
    return state.countries.list.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) && item.region.includes(region))
}
