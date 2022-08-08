import { ChangeTheme } from './theme-actions'


export const ThemeReducer = (store = 'light', {type, payload}) => {
    switch(type) {
        case ChangeTheme:
            return payload
        default: return store
    }
}