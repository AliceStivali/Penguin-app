import useSWR from "swr";
// import airportList from "./data";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer UA5gbhoM1POsGfyMpskf6ABgsl1j", //questa è la kay
    },
    mode: "cors",
    catch: "default",
  }).then((response) => response.json());

function useFetchTour() {
  // const cityData = airportList.find(
  //   ({ iata_code }) => iata_code === toIataCode
  // );
  // console.log(cityData);
  const { data, error } = useSWR(
    // cityData
    `https://test.api.amadeus.com/v1/shopping/activities?latitude=41.397158&longitude=2.160873&radius=20`,
    fetcher
  );

  return {
    tourData: data,
    tourError: error,
    tourLoading: !data && !error,
  };
}

export default useFetchTour;
