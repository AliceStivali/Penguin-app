import useSWR from "swr";


function useFetchFlay(iataCode, toIataCOde, date) {
    const {data,error} = useSWR(date ? `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataCode}&destinationLocationCode=${toIataCOde}&departureDate=${date}&adults=1&nonStop=false&max=250`: null)
   
    return ( {
        flyList: data, 
        error: error,
        flyLoading: !data && !error,
    } );
}

export default useFetchFlay;