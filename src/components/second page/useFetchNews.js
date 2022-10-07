import useSWR from "swr";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d62219a205mshcb74f62baa16233p1605c3jsn813f73531ea8",
    "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
  },
};

const fetcher = (url) =>
  fetch(url, options).then((response) => response.json());

export function useFetchNews() {
  const { data, error } = useSWR("https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=Rome&lang=en&sort_by=date&search_in=title&topic=entertainment&page=1&media=True",fetcher);

  return (
    {
    data: data,
    error: error,
    loading: !data && !error}
  )
}

