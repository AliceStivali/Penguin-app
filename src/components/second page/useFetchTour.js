import useSWR from "swr";
import { useParams } from "react-router-dom";
import { useFetchGeoloc } from "./useFetchGeoloc";

function useFetchTour() {
  const { cityarrival } = useParams();
  const { geolocData, geolocError } = useFetchGeoloc(cityarrival);

  console.log(geolocData);
  const { data, error } = useSWR(
    `https://test.api.amadeus.com/v1/shopping/activities?latitude=${geolocData.latitude}&longitude=${geolocData.longitude}&radius=20`
  );

  return {
    tourData: data,
    tourError: error,
    tourLoading: !data && !error,
  };
}

export default useFetchTour;
