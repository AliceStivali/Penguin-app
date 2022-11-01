import useSWR from "swr";

function useFetchFly(iataCode, toIataCode, flyData) {
  const { data, error } = useSWR(
    !flyData.return && flyData.date
      ? `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataCode}&destinationLocationCode=${toIataCode}&departureDate=${flyData.date}&adults=${flyData.adult}&children=${flyData.child}&nonStop=true&max=10`
      : flyData.return && flyData.dateReturn
      ? `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataCode}&destinationLocationCode=${toIataCode}&departureDate=${flyData.date}&returnDate=${flyData.dateReturn}&adults=${flyData.adult}&children=${flyData.child}&nonStop=true&max=5`
      : null
  );

  return {
    flyList: data,
    error: error,
    flyLoading: !data && !error,
  };
}

export default useFetchFly;
