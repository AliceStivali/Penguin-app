import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import airportList from "./data";
import SelectArrival from "./SelectArrival";
import ShowFly from "./ShowFly";
import "../../style/InputAirport.css";

function InputAirport() {
  const [iata_code, setCityIataCode] = useState(null);
  const [data, setData] = useState("");

  function childToParent(arrival) {
    setData(arrival);
  }
  console.log(data);

  return (
    <div className="input-airport-container">
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", marginLeft: "10px" }}>From</div>
        <div style={{ width: "50%", marginLeft: "10px" }}>To</div>
      </div>
      <div style={{ display: "flex" }}>
        <Autocomplete
          className="dep-input-padding"
          style={{ width: "50%" }}
          freeSolo
          onChange={(event, value) => setCityIataCode(value.iata_code)}
          options={airportList.sort(
            (a, b) => -b.country.localeCompare(a.country)
          )}
          groupBy={(option) => option.country}
          getOptionLabel={(option) => `${option.name},${option.city}`}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search city or airport"
              variant="outlined"
              fullWidth
              className="dep-arr-input"
            />
          )}
        />
        <SelectArrival iataCode={iata_code} childToParent={childToParent} />
      </div>
      <ShowFly data={iata_code} toIataCode={data} />
    </div>
  );
}
export default InputAirport;
