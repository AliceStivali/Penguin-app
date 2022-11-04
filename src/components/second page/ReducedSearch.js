import { useParams } from "react-router-dom";
import "../../style/ReducedSearch.css";

export function ReducedSearch() {
  const { iataCode, toIataCode, date, adult, child, dateReturn } = useParams();
  return (
    <div className="RS-container">
      <div className="input-field RS-input-1">{iataCode}</div>
      <div className="input-field RS-input-2">{toIataCode}</div>
      <div className="input-field RS-input-3">{date}</div>
      <div className="input-field RS-input-4">
        {dateReturn === "null" ? "N/D" : dateReturn}
      </div>
      <div className="input-field RS-input-5">
        {adult}
        <img
          src="./penguin.png"
          alt="pinguino adulto"
          style={{ height: "20px" }}
        />
      </div>
      <div className="input-field RS-input-6">
        {child}
        <img
          src="./penguin.png"
          alt="pinguino bambino"
          style={{ height: "13px" }}
        />
      </div>
    </div>
  );
}
