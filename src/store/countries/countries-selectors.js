export const selectAllCountries = (state) => state.countries.list;

export const selectCountries = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qwer: state.countries.list.length,
}) 

export const SearchAllSelectors = (state, {search = '', region = ''}) => {
    debugger;
    return state.countries.list.filter(item => (
        item.name.toLowerCase().includes(search.toLowerCase()) && item.region.includes(region)
    ))
}