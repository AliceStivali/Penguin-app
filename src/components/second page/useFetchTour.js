import useSWR from "swr";
import airportList from "../first page/data.js";
import { useParams } from "react-router-dom";

function useFetchTour() {
  const { cityarrival } = useParams();
  const cityData = airportList.find(
    ({ city }) => city.toUpperCase() === cityarrival
  );
  console.log(cityData);
  const { data, error } = useSWR(
    cityData._geoloc
      ? `https://test.api.amadeus.com/v1/shopping/activities?latitude=${cityData._geoloc.lat}&longitude=${cityData._geoloc.lng}&radius=20`
      : null
  );

  return {
    tourData: data,
    tourError: error,
    tourLoading: !data && !error,
  };
}

export default useFetchTour;
