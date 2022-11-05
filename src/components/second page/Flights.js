// import data from "./flyData";
import "../../style/Flights.css";

export function Flights(data) {
  const dep = data.data.itineraries[0].segments[0].departure;
  const arr = data.data.itineraries[0].segments[0].arrival;
  const duration = data.data.itineraries[0].segments[0].duration
    .slice(2)
    .toLowerCase();
  const price = data.data.price.total;

  const depDate = dep.at.slice(0, 10);
  const arrDate = arr.at.slice(0, 10);
  const depTime = dep.at.slice(11, -3);
  const arrTime = dep.at.slice(11, -3);
  const company = data.data.validatingAirlineCodes[0];

  return (
    data && (
      <div className="single-flight-container">
        <div className="flight-flex-container" style={{ alignItems: "center" }}>
          <div className="company-img">
            <img
              src={`../company-logos/${company}.jpg`}
              alt={`${company}`}
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </div>
          <div className="dep-arr-container">
            <div className="flights-departure">
              <div>
                <img
                  src="./plane-dep.png"
                  alt="dep"
                  style={{ width: "50px" }}
                />
              </div>
              <div>{dep.iataCode}</div>
              <div>{depDate}</div>
              <div>{depTime}</div>
            </div>
            <div className="flights-arrival">
              <div>
                <img
                  src="./plane-arr.png"
                  alt="arr"
                  style={{ width: "50px" }}
                />
              </div>
              <div>{arr.iataCode}</div>
              <div>{arrDate}</div>
              <div>{arrTime}</div>
            </div>
          </div>
          <div className="flight-details">
            <div>{duration}</div>
            <div style={{ fontSize: "25px" }}>{price}€</div>
            <div>
              <button className="card-book-button flights-button">
                Book <br />
                now
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="flights-button-mobile search-button">
            Book now
          </button>
        </div>
      </div>
    )
  );
}
