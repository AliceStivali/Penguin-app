import useSWR from "swr";

function useFetchFly(
  iataCode,
  toIataCode,
  date,
  adult,
  child,
  flightReturn,
  dateReturn
) {
  const { data, error } = useSWR(
    dateReturn === null
      ? `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataCode}&destinationLocationCode=${toIataCode}&departureDate=${date}&adults=${adult}&children=${child}&nonStop=true&max=10`
      : `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataCode}&destinationLocationCode=${toIataCode}&departureDate=${date}&returnDate=${dateReturn}&adults=${adult}&children=${child}&nonStop=true&max=5`
  );

  return {
    flyList: data,
    error: error,
    flyLoading: !data && !error,
  };
}

export default useFetchFly;
