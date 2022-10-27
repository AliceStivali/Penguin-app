import useSWR from "swr";

const fetcher = (url) =>
    fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Bearer ZzswkHT6tqiMzpcEWE1hFxvhSqPC", //questa è la kay
        },
        mode: "cors",
        catch: "default",
    }).then((responce) => responce.json());

function useFetchAirport(city) {
    const { data, error } = useSWR(
        city
            ? `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=${city}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=LIGHT`
            : null, fetcher
    );

    return {
        list: data,
        error: error,
        loading: !data && !error,
    };
}

export default useFetchAirport;
