import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchFlay from "./useFetchFly";

function ShowFly() {
    const [date, setDate] = useState(null);
    const { iataCode, toIataCode } = useParams();
    const { flyList, error, flyLoading } = useFetchFlay(
        iataCode,
        toIataCode,
        date
    );

    function handleInputDate(event) {
        event.preventDefault();
        setDate(event.target.elements.date.value);
    }

    console.log(flyList);
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
