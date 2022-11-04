import { useState } from "react";
import { Link } from "react-router-dom";

function ShowFly(data, toIataCode) {
  let today = new Date().toISOString().split("T")[0];
  // const dd = String(today.getDate()).padStart(2, "0");
  // const mm = String(today.getMonth() + 1).padStart(2, "0");
  // const yyyy = today.getFullYear();
  // today = mm + "/" + dd + "/" + yyyy;

  console.log(today);

  const [flyData, setFlyData] = useState({
    date: null,
    adult: 1,
    child: 0,
    dateReturn: null,
  });
  const [flightReturn, setFlightReturn] = useState(false);

  function handleInputDate(event) {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    setFlyData({
      ...flyData,
      [name]:
        type === "number"
          ? Math.max(0, Math.min(100, Number(event.target.value)))
          : value,
    });
  }

  function handleReturn(event) {
    setFlightReturn(event.target.checked);
  }

  return (
    <div>
      <form>
        <div
          style={{
            display: "flex",
            margin: "15px 0",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "10px" }}>
              <div className="input-margin">Departure</div>
              <div className="passengers-input-container">
                <input
                  type="date"
                  name="date"
                  min={today}
                  onChange={handleInputDate}
                />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="input-margin">Return</span>
                <input
                  type="checkbox"
                  name="return"
                  id="return"
                  onChange={handleReturn}
                />
              </div>
              <div className="passengers-input-container">
                <input
                  type="date"
                  name="dateReturn"
                  min={flyData.date}
                  onChange={handleInputDate}
                  disabled={!flightReturn && true}
                />
              </div>
            </div>
          </div>
          <div className="passengers-container">
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
                  value={flyData.adult}
                  className="passengers-input"
                  onChange={handleInputDate}
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
                  value={flyData.child}
                  className="passengers-input"
                  onChange={handleInputDate}
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
        <div className="search-button-container">
          <Link
            to={`/depart=${data.data}&arrival=${data.toIataCode?.iataCode}&date=${flyData.date}&adult=${flyData.adult}&child=${flyData.child}&cityarrival=${data.toIataCode?.name}&dateReturn=${flyData.dateReturn}`}
          >
            {
              <button
                type="submit"
                className="search-button input-airport-button"
              >
                Search
              </button>
            }
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ShowFly;
