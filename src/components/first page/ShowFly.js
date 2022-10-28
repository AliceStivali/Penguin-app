import { useState } from "react";
import useFetchFly from "./useFetchFly";

function ShowFly(data, toIataCode) {
  const [flyData, setFlyData] = useState({
    date: null,
    adult: 1,
    child: 0,
    return: undefined,
    dateReturn: null,
  });
  const { flyList, error, flyLoading } = useFetchFly(
    data.data,
    data.toIataCode?.iataCode,
    flyData
  );
  console.log(data);
  console.log(data.toIataCode);

  function handleInputDate(event) {
    event.preventDefault();
    setFlyData({
      date: event.target.elements.date.value,
      adult: event.target.elements.adult.value,
      child: event.target.elements.child.value,
      return: event.target.elements.return.checked ? true : false,
      dateReturn: event.target.elements.dateReturn.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleInputDate}>
        <span>Inserire la data di partenza:</span>
        <input type="date" name="date" />
        <input type="number" name="adult" id="adult" placeholder="adult" />
        <input type="number" name="child" id="child" placeholder="child" />
        <span>Ritorno?</span>
        <input type="checkbox" name="return" id="return" />
        <span>Inserire la data di partenza:</span>
        <input type="date" name="dateReturn" />
        <button type="submit">Cerca</button>
      </form>
      {flyLoading && <h3>Caricamento...</h3>}
      {error && <h3> C'è stato un errore</h3>}
      {flyList && (
        <div>
          <h2> Voli trovati: {flyList.meta.count}</h2>
        </div>
      )}
    </div>
  );
}

export default ShowFly;
