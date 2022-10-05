import { Link, Outlet, useParams } from "react-router-dom";
import useFatchDesination from "./useFetchDestination";

function ShowDestination() {
    const {iataCode} = useParams()
    const { desinationList, destinationError, destinationLoading } = useFatchDesination(iataCode)


    return ( <div>
            {destinationLoading && <h3>Caricamento...</h3>}
            {destinationError && <h3> C'è stato un errore</h3>}
            {desinationList && (
                <ul>
                    {desinationList.meta.count === 0 && <h2> Nessun risultato</h2>}
                    {desinationList.meta.count !== 0 && <h2> Aereoporti trovati: {desinationList.meta.count}</h2>}
                    {desinationList.data.map((item, index) => (
                        <li key={index}><Link to={`${item.iataCode}`}>{item.name}</Link> </li>
                    ))}
                </ul>
            )}
            <Outlet/>
    </div> );
}

export default ShowDestination;