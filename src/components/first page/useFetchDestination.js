import useSWR from "swr";

const fetcher = (url) =>
    fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Bearer mhjIvUeTX4erdUSaiYP16tZ7o1n7", //questa è la kay
        },
        mode: "cors",
        catch: "default",
    }).then((responce) => responce.json());

function useFetchDesination(iataCode) {
    const { data, error } = useSWR(
        iataCode
            ? `https://test.api.amadeus.com/v1/airport/direct-destinations?departureAirportCode=${iataCode}`
            : null, fetcher
    );

    return {
        desinationList: data,
        destinationError: error,
        destinationLoading: !data && !error,
    };
}

export default useFetchDesination;
