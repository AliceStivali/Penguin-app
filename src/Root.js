import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import App from "./App";


// fetcher per ogni SWR, da cambiare la key quando richiesto
const fetcher = (url) => fetch(url,{
    method:"GET",
    headers:{
    "Authorization": "Bearer 6My8Ij6sBDf84AYjU76ghSnCbAeg", //questa è la kay
    },
    mode:"cors",
    catch:"default"
}).then(responce=>responce.json())

function Root() {
    return (
        <SWRConfig value={{ fetcher }}>
        <BrowserRouter >
        <App />
        </BrowserRouter>
        </SWRConfig>
     );
}

export default Root;
