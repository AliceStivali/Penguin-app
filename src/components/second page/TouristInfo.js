import { useState } from "react";
import useFetchTour from "./useFetchTour";

export function TouristInfo() {
  const [index, setIndex] = useState(0);

  function changeIndex() {
    if (tourData) {
      setIndex(index + 1);
    }
  }

  const { tourData, tourError, tourLoading } = useFetchTour();
  return (
    <div className="tourist-info">
      {tourLoading && <h3>Caricamento...</h3>}
      {tourError && <h3> C'è stato un errore</h3>}
      {tourData && (
        <div>
          <h2>{tourData.data[index].name}</h2>
          <img
            src={tourData.data[index].pictures[0]}
            alt=""
            style={{ width: "fit-content" }}
          />
          <button>
            <a href={tourData.data[index].bookingLink}>Book</a>
          </button>
        </div>
      )}
      <button onClick={changeIndex}>></button>
    </div>
  );
}
