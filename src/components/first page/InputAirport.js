import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import airportList from "./data";
import SelectArrival from "./SelectArrival";
;


function InputAirport() {
    const [iata_code, setCityIataCode] = useState(null);

  return (
    <div>
        <Autocomplete
          freeSolo
          onChange={(event, value) => setCityIataCode(value.iata_code)}
          options={airportList.sort((a, b) => -b.country.localeCompare(a.country))}
          groupBy={(option) => option.country}
          getOptionLabel={(option) => `${option.name},${option.city}`}
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
      <SelectArrival  iataCode={iata_code}/>
    </div>
  );
}
export default InputAirport;
