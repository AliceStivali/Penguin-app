import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchFlay from "./useFetchFly";
import useFetchTour from "./useFetchTour";

function ShowFly() {
    const [date, setDate] = useState(null);
    const { iataCode, toIataCode } = useParams();
    const { flyList, error, flyLoading } = useFetchFlay(
        iataCode,
        toIataCode,
        date
    );
    const { tourData, tourError, tourLoading } = useFetchTour(`${toIataCode}`);
    const [displayTour, setDisplayTour] = useState(false);

    function handleInputDate(event) {
        event.preventDefault();
        setDate(event.target.elements.date.value);
    }

    function handTourDisplay(event) {
        if (displayTour) {
            setDisplayTour(false);
        } else {
            setDisplayTour(true);
        }
    }

    console.log(tourData);
    return (
        <div>
            <form onSubmit={handleInputDate}>
                <span>Inserire la data di partenza:</span>
                <input type="date" name="date" />
                <button type="submit">Cerca</button>
            </form>
            <button onClick={handTourDisplay}>See Tour</button>
            {flyLoading && <h3>Caricamento...</h3>}
            {error && <h3> C'è stato un errore</h3>}
            {flyList && (
                <div>
                    <h2> Voli trovati: {flyList.meta.count}</h2>
                </div>
            )}
            <div>
                {tourLoading && displayTour && <h3>Caricamento...</h3>}
                {tourError && displayTour && <h3> C'è stato un errore</h3>}
                {tourData && displayTour && (
                    <div>
                        <h2> Tour trovati: {tourData.meta.count}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShowFly;
