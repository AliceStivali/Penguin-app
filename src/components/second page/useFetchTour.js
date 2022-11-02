import useSWR from "swr";
import airportList from "../first page/data.js";
import { useParams } from "react-router-dom";


function useFetchTour() {
  const {toIataCode} = useParams()
  const cityData = airportList.find(
    ({ iata_code }) => iata_code === toIataCode
  );
  console.log(cityData, 'alice');
  const { data, error } = useSWR(
    // cityData
    `https://test.api.amadeus.com/v1/shopping/activities?latitude=${cityData._geoloc.lat}&longitude=${cityData._geoloc.lng}&radius=20`,
    
  );

  return {
    tourData: data,
    tourError: error,
    tourLoading: !data && !error,
  };
}

export default useFetchTour;
