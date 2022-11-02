import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import useFetchDesination from "./useFetchDestination";
import "../../style/InputAirport.css";

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function SelectArrival({ iataCode, childToParent }) {
  const { desinationList, destinationError, destinationLoading } =
    useFetchDesination(iataCode);
  const [arrival, setArrival] = useState(null);
  let destinationCityList = [];
  if (desinationList) {
    destinationCityList = getUniqueListBy(desinationList.data, "name");
  }

  // const data = {
  //   type: "location",
  //   subtype: "city",
  //   name: "ADDIS ABABA",
  //   iataCode: "ADD",
  // };

  return (
    <div>
      <div style={{ width: "50%", marginLeft: "10px" }}>To</div>
      <Autocomplete
        onChange={(event, value) => childToParent(value)}
        disablePortal
        options={destinationCityList.sort(
          (a, b) => -b.name.localeCompare(a.countryName)
        )}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} className="dep-arr-input" />
        )}
      />
    </div>
  );
}

export default SelectArrival;
