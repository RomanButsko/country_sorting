import { useDispatch, useSelector } from "react-redux";
import { SearchSelectorsRegion, setRegion } from "./controls-reducer";


export const UseRegion = () => {
    const dispatch = useDispatch();
    const controls = useSelector(SearchSelectorsRegion);
  
    const handleSelect = (reg) => {
      dispatch(setRegion(reg?.value || ""));
    };
    return [controls, handleSelect]
}