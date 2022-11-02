import { color } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { checkbox } from "@material-tailwind/react";

function ShowFly(data, toIataCode) {
  const [flyData, setFlyData] = useState({
    date: null,
    adult: 1,
    child: 0,
    flightReturn: false,
    dateReturn: null,
  });

  function handleInputDate(event) {
    const value = event.target.value;
    const checked = event.target.checked;
    const name = event.target.name;
    setFlyData({
      ...flyData,
      [name]: name === "flightReturn" ? checked : value,
    });
  }

  return (
    <div>
      <form>
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
                <input type="date" name="date" onChange={handleInputDate} />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="input-margin">Return</span>
                <input
                  type="checkbox"
                  name="return"
                  id="return"
                  onChange={handleInputDate}
                />
              </div>
              <div className="passengers-input-container">
                <input
                  type="date"
                  name="dateReturn"
                  onChange={handleInputDate}
                />
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "15px 0",
          }}
        >
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
