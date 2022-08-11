import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBorderCountries, selectAllBorderCountries } from './details-reducer';


export const UseInfo = (borders = []) => {
    const dispatch = useDispatch();
    const neighbors = useSelector(selectAllBorderCountries);
  
    useEffect(() => {
      if (borders.length) {
        dispatch(loadBorderCountries(borders));
      }
    }, [borders, dispatch]);
    return neighbors
}
