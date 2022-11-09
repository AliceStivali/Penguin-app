import { useState } from "react";
import useFetchTour from "./useFetchTour";
import "../../style/TouristInfo.css";

export function TouristInfo() {
  const [index, setIndex] = useState(0);
  const { tourData, tourError, tourLoading } = useFetchTour();

  function changeIndexForward() {
    if (index + 1 <= 3) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function changeIndexBack() {
    if (index !== 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="tourist-info">
      {tourLoading && <h3>Loading...</h3>}
      {tourError && <h3>There has been an error...</h3>}
      {tourData && tourData.meta.count !== 0 && (
        <div>
          <h6>{tourData.data[index].name}</h6>
          <div style={{ display: " flex", justifyContent: "center" }}>
            <img
              src={tourData.data[index].pictures[0]}
              alt=""
              className="tour-data-img"
            />
          </div>
          <div className="tourist-card-buttons">
            <button className="card-book-button">
              <a href={tourData.data[index].bookingLink}>Book</a>
            </button>
            <div className="tourist-arrow-btn-container">
              {index !== 0 && (
                <button
                  onClick={changeIndexBack}
                  className="arrow-button tourist-arrow"
                >
                  ◀
                </button>
              )}
              <button
                onClick={changeIndexForward}
                className="arrow-button tourist-arrow"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      )}
      {tourData && tourData.meta.count === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "white" }}>No tours available!</h3>
          <img
            src="../../dead-penguin.gif"
            alt="error"
            style={{ width: "10rem" }}
          />
        </div>
      )}
    </div>
  );
}
