import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { App } from "./App";

// fetcher per ogni SWR, da cambiare la key quando richiesto
const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer Kn16f66S6NbwQrj1YPBGl65GofvK", //questa è la key
    },
    mode: "cors",
    catch: "default",
  }).then((responce) => responce.json());

function Root() {
  return (
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  );
}

export default Root;
