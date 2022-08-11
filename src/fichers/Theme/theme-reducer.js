import { createSlice } from '@reduxjs/toolkit'

const ThemeSlice = createSlice({
    name: '@@theme',
    initialState: 'light',
    reducers: {
        changeTheme: (_,action) => { 
            return action.payload 
        } ,
    }
})

export const {changeTheme} = ThemeSlice.actions;
export const themeReducer = ThemeSlice.reducer;