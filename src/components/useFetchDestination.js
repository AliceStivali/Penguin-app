import useSWR from "swr";

function useFatchDesination(iataCode) {
    const { data, error } = useSWR(
        iataCode
            ? `https://test.api.amadeus.com/v1/airport/direct-destinations?departureAirportCode=${iataCode}`
            : null
    );

    return {
        desinationList: data,
        destinationError: error,
        destinationLoading: !data && !error,
    };
}

export default useFatchDesination;
