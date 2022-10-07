import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useFetchAirport from "./useFetchAirport";
import { Autocomplete, TextField } from "@mui/material";
import airportList from "./data";

const cityList = airportList.map((item) => {
    return { city: item.city, country: item.country };
});

function InputAirport() {
    const [city, setInputCity] = useState(null);
    const [value, setValue] = useState("");
    const { list, error, loading } = useFetchAirport(city);

    function handleInputCity(event) {
        event.preventDefault();
        setInputCity(value);
        console.log(city);
    }

    console.log(list);
    return (
        <div>
            <form onSubmit={handleInputCity}>
                <Autocomplete
                    freeSolo
                    onChange={(event, value) => setValue(value)}
                    options={cityList.sort(
                        (a, b) => -b.country.localeCompare(a.country)
                    )}
                    groupBy={(option) => option.country}
                    getOptionLabel={(option) => option.city}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search city"
                            variant="outlined"
                            fullWidth
                        />
                    )}
                />
                <button type="submit">Cerca</button>
            </form>
            <Link to="/">Home</Link>
            <Link to="/search">Cerca voli</Link>
            {city && loading && <h3>Caricamento...</h3>}
            {error && <h3> C'è stato un errore</h3>}
            {list && (
                <ul>
                    {list.meta.count === 0 && <h2> Nessun risultato</h2>}
                    {list.meta.count !== 0 && (
                        <h2> Aereoporti trovati: {list.meta.count}</h2>
                    )}
                    {list.data.map((item, index) => (
                        <li key={index}>
                            <Link to={`/${item.iataCode}`}>{item.name} </Link>{" "}
                        </li>
                    ))}
                </ul>
            )}
            <Outlet />
        </div>
    );
}

export default InputAirport;
