import useSWR from "swr";
import airportList from "./data";

function useFetchTour(toIataCode) {
    const cityData = airportList.find(
        ({ iata_code }) => iata_code === toIataCode
    );
    console.log(cityData);
    const { data, error } = useSWR(
        cityData
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
