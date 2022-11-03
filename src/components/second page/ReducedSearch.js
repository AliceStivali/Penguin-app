import "../../style/ReducedSearch.css";
import data from "./flyData";

const dep = data.itineraries[0].segments[0].departure;
const arr = data.itineraries[0].segments[0].arrival;
const depDate = dep.at.slice(0, 10);
const arrDate = arr.at.slice(0, 10);

export function ReducedSearch() {
  return (
    <div className="RS-container">
      <div className="input-field RS-input-1">{dep.iataCode}</div>
      <div className="input-field RS-input-2">{arr.iataCode}</div>
      <div className="input-field RS-input-3">{depDate}</div>
      <div className="input-field RS-input-4">{arrDate}</div>
      <div className="input-field RS-input-5">
        1
        <img
          src="./penguin.png"
          alt="pinguino adulto"
          style={{ height: "20px" }}
        />
      </div>
      <div className="input-field RS-input-6">
        1
        <img
          src="./penguin.png"
          alt="pinguino bambino"
          style={{ height: "13px" }}
        />
      </div>
    </div>
  );
}
