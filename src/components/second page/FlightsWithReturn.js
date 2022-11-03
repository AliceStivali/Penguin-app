import "../../style/Flights.css";

export function FlightsWithReturn(data) {
  console.log(data)
  const dep = data.data.itineraries[0].segments[0].departure;
  const arr = data.data.itineraries[0].segments[0].arrival;
  const duration = data.data.itineraries[0].segments[0].duration;
  const price = data.data.price.total;

  const depDate = dep.at.slice(0, 10);
  const arrDate = arr.at.slice(0, 10);
  const depTime = dep.at.slice(11, -3);
  const arrTime = dep.at.slice(11, -3);



  return (
    <div className="single-flight-container">
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "85%" }}>
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
          <div style={{ alignSelf: "center", marginLeft: "20px" }}>
            {duration}
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", marginTop: "30px" }}>
          <div style={{ width: "85%" }}>
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
          <div style={{ alignSelf: "center", marginLeft: "20px" }}>
            {duration}
          </div>
        </div>
      </div>

      <div className="flight-details">
        <div style={{ fontSize: "25px" }}>{price}€</div>
        <div>
          <button className="card-book-button">
            Book <br />
            now
          </button>
        </div>
      </div>
    </div>
  );
}