// import { BrowserRouter } from "react-router-dom";
// import { SWRConfig } from "swr";
// import {App} from "./App";

// // fetcher per ogni SWR, da cambiare la key quando richiesto
// const fetcher = (url) =>
//     fetch(url, {
//         method: "GET",
//         headers: {
//             Authorization: "Bearer DV9svm8c6qAvAJaf3FeaMos1oxmr", //questa è la kay
//         },
//         mode: "cors",
//         catch: "default",
//     }).then((responce) => responce.json());

// function Root() {
//     return (
//         <SWRConfig value={{ fetcher }}>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </SWRConfig>
//     );
// }

// export default Root;
