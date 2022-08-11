import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { CountriesListData } from "./use-countries";

export const CountriesList = () => {
  const navigate = useNavigate();
  const [countries, { status, error }] = CountriesListData();

  return (
    <>
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
