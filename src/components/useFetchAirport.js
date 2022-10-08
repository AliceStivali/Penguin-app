import useSWR from "swr";

function useFetchAirport(city) {
    const { data, error } = useSWR(city ? `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=${city}&countryCode=IT&page%5Blimit%5D=10&page%5Boffset%5D=0&view=LIGHT`: null );

    return {
        list: data,
        error: error,
        loading: !data && !error,
    };
}

export default useFetchAirport;

