import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import airportList from "./data";
import SelectAirport from "./SelectAirport";

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

const cityList = getUniqueListBy(airportList, "city");


function InputAirport() {
    const [city, setInputCity] = useState(null);
    const [value, setValue] = useState("");

    function handleInputCity(event) {
        event.preventDefault();
        setInputCity(value);;
  }

  return (
    <div>
      <form onSubmit={handleInputCity}>
        <Autocomplete
          freeSolo
          onChange={(event, value) => setValue(value.city)}
          options={cityList.sort((a, b) => -b.country.localeCompare(a.country))}
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
      <SelectAirport city={city}/>
    </div>
  );
}
export default InputAirport;
