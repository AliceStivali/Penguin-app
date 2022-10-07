import React from "react";
import Turnstone from "turnstone";
import airportList from "./data";

const styles = {
    input: "border p-2 bg-white w-full",
    listbox: "border p-2 bg-white w-full",
};

let cityList = [];

airportList.forEach((e) => {
    if (!cityList.includes(e.city)) {
        cityList.push(e.city);
    }
});

const listbox = [
    {
        id: "name",
        name: "name",
        ratio: 2,
        // displayField: 'name',
        data: cityList,
        searchType: "contains",
    },
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
