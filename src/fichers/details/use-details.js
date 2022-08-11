import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearDetails, loadDefineCountries, selectDetails } from './details-reducer';


export const useDetails = (name) => {
const dispatch = useDispatch();
const details = useSelector(selectDetails);

useEffect(() => {
  dispatch(loadDefineCountries(name));

  return () => {
    dispatch(clearDetails());
  };
}, [name, dispatch]);

return details
}