import React from 'react'
import Turnstone from 'turnstone'
import airportList from "./data";

const styles = {
  input: 'border p-2 bg-white w-full',
  listbox: 'border p-2 bg-white w-full'
}



const listbox = [
  {
    id: 'airports',
    name: 'Airports',
    ratio: 2,
    displayField: 'name, city',
    data: airportList,
    searchType: 'contains'
  }
];

export function SaerchAirportBar() {
  return (
    <Turnstone
    autoFocus={true}
    cancelButton={true}
    clearButton={true}
    debounceWait={250}
    id="autocomplete"
    listbox={listbox}
    listboxIsImmutable={true}
    matchText={true}
    maxItems={10}
    noItemsMessage="We found no places that match your search"
    placeholder="Enter a city or airport"
    styles={styles}
    />
  );
}
