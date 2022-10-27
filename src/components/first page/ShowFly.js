import { useState } from "react";
import useFetchFly from "./useFetchFly";

function ShowFly(data, toIataCode) {


  const [date, setDate] = useState(null);
  const { flyList, error, flyLoading } = useFetchFly(
    data.data,
    data.toIataCode?.iataCode,
    date
  );
  console.log(data);
  console.log(data.toIataCode);


  function handleInputDate(event) {
    event.preventDefault();
    setDate(event.target.elements.date.value);
  }

  return (
    <div>
      <form onSubmit={handleInputDate}>
        <span>Inserire la data di partenza:</span>
        <input type="date" name="date" />
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
