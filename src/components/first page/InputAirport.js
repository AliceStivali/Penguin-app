import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import airportList from "./data";
import SelectArrival from "./SelectArrival";
import ShowFly from "./ShowFly";

function InputAirport() {
  const [iata_code, setCityIataCode] = useState(null);
  const [data, setData] = useState("");

  function childToParent(arrival) {
    setData(arrival);
  }
  console.log(data);

  return (
    <div style={{ display: "flex" }}>
      <Autocomplete
        freeSolo
        onChange={(event, value) => setCityIataCode(value.iata_code)}
        options={airportList.sort(
          (a, b) => -b.country.localeCompare(a.country)
        )}
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
      <SelectArrival iataCode={iata_code} childToParent={childToParent} />
      <ShowFly data={iata_code} toIataCode={data} />
    </div>
  );
}
export default InputAirport;
