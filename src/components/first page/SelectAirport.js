import useFetchAirport from "./useFetchAirport";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import SelectArrival from "./SelectArrival";

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function SelectAirport(city) {
  const { list, error, loading } = useFetchAirport(city.city);
  const [partenza, setPartenza] = useState(null)
  let destinationList = []
  if (list) {
    destinationList=getUniqueListBy(list.data, "name")
  }

  return (
    <div>
      <Autocomplete
        onChange={(event, value) => setPartenza(value.iataCode)}
        disablePortal
        options={destinationList.sort((a, b) => -b.name.localeCompare(a.name))}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Airport" />}
      />

      <SelectArrival iataCode={partenza} />
    </div>
  );
}

export default SelectAirport;
