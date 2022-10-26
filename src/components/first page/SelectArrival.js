
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import useFetchDesination from "./useFetchDestination";

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function SelectArrival(iataCode) {
  const { desinationList, destinationError, destinationLoading } = useFetchDesination(iataCode.iataCode);
  const [arrival, setArrival] = useState(null);
  let destinationCityList = [];
  if (desinationList) {
    destinationCityList = getUniqueListBy(desinationList.data, "name");
  }
  console.log(desinationList);
  return (
    <div>
      <Autocomplete
        onChange={(event, value) => setArrival(value)}
        disablePortal
        options={destinationCityList.sort((a, b) => -b.name.localeCompare(a.name))}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Arrival" />}
      />
    </div>
  );
}

export default SelectArrival;
