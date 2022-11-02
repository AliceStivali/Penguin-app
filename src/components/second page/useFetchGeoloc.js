import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: { "X-Api-Key": "Bearer pAb44zbyuAbq4KwYCZguqQ==Tw0BIc1j9BchthLM" },
    contentType: "application/json",
    catch: "default",
  }).then((response) => response.json());

export function useFetchGeoloc(city) {
  const { data, error } = useSWR(
    city ? `https://api.api-ninjas.com/v1/city?name=${city}` : null,
    fetcher
  );
  console.log(data);
  return {
    geolocData: data,
    geolocError: error,
  };
}
