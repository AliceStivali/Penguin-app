import data from "./flyData";
import "../../style/Flights.css";

const dep = data.itineraries[0].segments[0].departure;
const arr = data.itineraries[0].segments[0].arrival;
const duration = data.itineraries[0].segments[0].duration;
const price = data.price.total;

export function Flights() {
  return (
    <div className="bg-black opacity-80 rounded-3xl container mx-auto flights-container">
      <div className="flights-header">Flights</div>
      <div className="single-flight-container">
        <div style={{ width: "70%" }}>
          <div className="flights-departure">
            <div>DEPT</div>
            <div>{dep.iataCode}</div>
            <div>{dep.at}</div>
            <div>{dep.at}</div>
          </div>
          <div className="flights-arrival">
            <div>ARR</div>
            <div>{arr.iataCode}</div>
            <div>{arr.at}</div>
            <div>{arr.at}</div>
          </div>
        </div>
        <div className="flight-details">
          <div>{duration}</div>
          <div style={{ fontSize: "25px" }}>{price}€</div>
          <div>
            <button className="card-book-button">
              Book <br />
              now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
