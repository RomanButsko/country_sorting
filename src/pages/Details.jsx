import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearDetails, loadCountries } from "../store/details/details-actions";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(
    (state) => state.details
  );

  useEffect(() => {
    dispatch(loadCountries(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {error && <h2>There isn't data</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "received" && currentCountry && (
        <Info push={navigate} {...currentCountry} />
      )}
    </div>
  );
};
