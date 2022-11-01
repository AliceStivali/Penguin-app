import useSWR from "swr";

function useFetchDesination(iataCode) {
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

export default useFetchDesination;
