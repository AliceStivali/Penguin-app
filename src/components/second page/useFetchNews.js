import useSWR from "swr";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d62219a205mshcb74f62baa16233p1605c3jsn813f73531ea8",
    "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
  },
};

const city = "Milan"
const fetcher = (url) =>
  fetch(url, options).then((response) => response.json());

export function useFetchNews() {
  const { data, error } = useSWR(`https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=
  ${city}&lang=en&sort_by=date&search_in=title&topic=entertainment&page=1&media=True`
  ,fetcher);

  let articlesNumber = 0
  if (data) {
  if(data.total_hits >= 50) {
      articlesNumber = 50
  } else {
      articlesNumber = data.total_hits
  }
} 


  return (
    {
    data: data,
    error: error,
    loading: !data && !error,
    articlesNumber : articlesNumber}
    
  )
}