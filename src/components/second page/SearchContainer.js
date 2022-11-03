import { useState } from "react";
import "../../style/InputAirport.css";
import "../../style/ReducedSearch.css";
import InputAirport from "../first page/InputAirport";
import { ReducedSearch } from "./ReducedSearch";

export function SearchContainer() {
  const [showSearch, setShowSearch] = useState(false);

  function handleNewSearch() {
    setShowSearch(true);
  }

  return (
    <div className="search-container">
      {!showSearch && <ReducedSearch />}
      {showSearch && <InputAirport />}
      {!showSearch && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="search-button" onClick={handleNewSearch}>
            New search
          </button>
        </div>
      )}
    </div>
  );
}
