import { useNavigate } from "react-router-dom";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchAllSelectors,
  selectCountries,
} from "../store/countries/countries-selectors";
import { loadCountries } from "../store/countries/countries-actions";
import { useEffect } from "react";
import { SearchSelectorsControls } from "../store/controls/controls-selectors";

export const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { search, region } = useSelector(SearchSelectorsControls);
  const countries = useSelector((state) =>
    SearchAllSelectors(state, { search, region })
  );
  const { status, error, qwer } = useSelector(selectCountries);

  useEffect(() => {
    if (!qwer) {
      dispatch(loadCountries());
    }
  }, [qwer, dispatch]);
  debugger;
  return (
    <>
      <Controls />
      {error && <h2>Something was wrong</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "received" && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
