import { color } from "@mui/system";
import { useState } from "react";
import useFetchFly from "./useFetchFly";

function ShowFly(data, toIataCode) {
  const [flyData, setFlyData] = useState({
    date: null,
    adult: 1,
    child: 0,
    return: undefined,
    dateReturn: null,
  });
  const { flyList, error, flyLoading } = useFetchFly(
    data.data,
    data.toIataCode?.iataCode,
    flyData
  );
  console.log(data);
  console.log(data.toIataCode);

  function handleInputDate(event) {
    event.preventDefault();
    setFlyData({
      date: event.target.elements.date.value,
      adult: event.target.elements.adult.value,
      child: event.target.elements.child.value,
      return: event.target.elements.return.checked ? true : false,
      dateReturn: event.target.elements.dateReturn.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleInputDate}>
        <div
          style={{
            display: "flex",
            margin: "15px 0",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "10px" }}>
              <div className="input-margin">Departure</div>
              <div className="passengers-input-container">
                <input type="date" name="date" />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="input-margin">Return</span>
                <input type="checkbox" name="return" id="return" />
              </div>
              <div className="passengers-input-container">
                <input type="date" name="dateReturn" />
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "10px" }}>
              <div className="input-margin">Adults (+12)</div>
              <div
                className="passengers-input-container"
                style={{ width: "80px" }}
              >
                <input
                  type="number"
                  name="adult"
                  id="adult"
                  className="passengers-input"
                />
                <img
                  src="./penguin.png"
                  alt="pinguino adulto"
                  style={{ height: "20px" }}
                />
              </div>
            </div>
            <div>
              <div className="input-margin">Children (2-12)</div>
              <div
                className="passengers-input-container"
                style={{ width: "80px" }}
              >
                <input
                  type="number"
                  name="child"
                  id="child"
                  className="passengers-input"
                />
                <img
                  src="./penguin.png"
                  alt="pinguino bambino"
                  style={{ height: "13px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "15px 0",
          }}
        >
          <button type="submit" className="search-button input-airport-button">
            Search
          </button>
        </div>
      </form>
      {flyLoading && <h3>Caricamento...</h3>}
      {error && <h3> C'è stato un errore</h3>}
      {flyList && (
        <div>
          <h2> Voli trovati: {flyList.meta.count}</h2>
        </div>
      )}
    </div>
  );
}

export default ShowFly;
