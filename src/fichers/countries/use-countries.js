import { useDispatch, useSelector } from "react-redux";
import {
  SearchAllSelectors,
  selectCountries,
  loadCountries,
} from "./countries-reducer";
import { useEffect } from "react";
import { SearchSelectorsControls } from '../controls/controls-reducer';

export const CountriesListData = () => {
  const dispatch = useDispatch();
  const params = useSelector(SearchSelectorsControls);
  const countries = useSelector((state) =>
    SearchAllSelectors(state, params)
  );
  const { status, error, qwer } = useSelector(selectCountries);

  useEffect(() => {
    if (!qwer) {
      dispatch(loadCountries());
    }
  }, [qwer, dispatch]);
  return [countries,  { status, error, qwer }];
};
