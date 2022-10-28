import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer VeAbLF6DhWdRFZpU8kb0l1X2TTZs", //questa è la kay
    },
    mode: "cors",
    catch: "default",
  }).then((responce) => responce.json());

function useFetchFly(iataCode, toIataCode, flyData) {
  const { data, error } = useSWR(
    !flyData.return && flyData.date
      ? `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataCode}&destinationLocationCode=${toIataCode}&departureDate=${flyData.date}&adults=${flyData.adult}&children=${flyData.child}&nonStop=true&max=10`
      : flyData.return && flyData.dateReturn
      ? `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataCode}&destinationLocationCode=${toIataCode}&departureDate=${flyData.date}&returnDate=${flyData.dateReturn}&adults=${flyData.adult}&children=${flyData.child}&nonStop=true&max=5`
      : null,
    fetcher
  );

  return {
    flyList: data,
    error: error,
    flyLoading: !data && !error,
  };
}

export default useFetchFly;
