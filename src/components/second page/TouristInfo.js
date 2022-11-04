import { useState } from "react";
import useFetchTour from "./useFetchTour";
import "../../style/TouristInfo.css";

export function TouristInfo() {
  const [index, setIndex] = useState(0);

  function changeIndexForward() {
    if (tourData) {
      setIndex(index + 1);
    }
  }
  function changeIndexBack() {
    if (index !== 0) {
      setIndex(index - 1);
    }
  }

  const { tourData, tourError, tourLoading } = useFetchTour();

  return (
    <div className="tourist-info">
      {tourLoading && <h3>Caricamento...</h3>}
      {tourError && <h3> C'è stato un errore</h3>}
      {tourData && (
        <div>
          <h6>{tourData.data[index].name}</h6>
          <div style={{ display: " flex", justifyContent: "center" }}>
            <img
              src={tourData.data[index].pictures[0]}
              alt=""
              className="tour-data-img"
            />{" "}
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
    </div>
  );
}
