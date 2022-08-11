import { Info } from "./Info";
import { useDetails } from "./use-details";

const CountryDetails = ({ name = "", navigate }) => {
  const [currentCountry, error, status] = useDetails(name);
  return (
    <>
      {error && <h2>There isn't data</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

export { CountryDetails };
