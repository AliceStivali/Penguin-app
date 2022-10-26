import useSWR from "swr";


const fetcher = (url) =>
    fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Bearer fOQvkvvpcOiISlYrqYTTlM1YEsGo", //questa è la kay
        },
        mode: "cors",
        catch: "default",
    }).then((responce) => responce.json());

function useFetchFly(iataCode, toIataCOde, date) {
    const { data, error } = useSWR(
        date
            ? `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataCode}&destinationLocationCode=${toIataCOde}&departureDate=${date}&adults=1&nonStop=false&max=250`
            : null, fetcher
    );

    return {
        flyList: data,
        error: error,
        flyLoading: !data && !error,
    };
}

export default useFetchFly;
