import { useDispatch, useSelector } from "react-redux";
import { setSearch, SearchSelectors } from "./controls-reducer";


export const UseSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector(SearchSelectors);
  
    const handleSearch = (e) => {
      dispatch(setSearch(e.target.value));
    };
    return [search, handleSearch]
}