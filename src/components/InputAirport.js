import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { airfetch } from "./data";
import useFetchAirport from "./useFetchAirport";
import { SaerchAirportBar } from "./SearchAirportBar";

function InputAirport() {
    const [city, setInputCity] = useState(null)
    // const [data, setData] = useState([])
    const { list, error, loading } = useFetchAirport(city)

    // useEffect(() => {
    //     if (city !== "") {
    //         setData(list.data)

    //     }
    // }, [city])

    function handleInputCity(event) {
        event.preventDefault()
        setInputCity(event.target.elements.city.value)

    }

    console.log(list);
    return (
        <div>
            <form onSubmit={handleInputCity}>
                <SaerchAirportBar name="city" />
                <button type="submit" >Cerca</button>
            </form>
            <Link to="/">Home</Link>
            <Link to="/search">Cerca voli</Link>
            {city && loading && <h3>Caricamento...</h3>}
            {error && <h3> C'è stato un errore</h3>}
            {list && (
                <ul>
                    {list.meta.count === 0 && <h2> Nessun risultato</h2>}
                    {list.meta.count !== 0 && <h2> Aereoporti trovati: {list.meta.count}</h2>}
                    {list.data.map((item, index) => (
                        <li key={index}><Link to={`/${item.iataCode}`}>{item.name}  </Link>  </li>
                    ))}
                </ul>
            )}
            <Outlet/>
        </div>
    )
}

export default InputAirport


