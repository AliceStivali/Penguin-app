import "../../style/Flights.css";
import useFetchFly from "./useFetchFly";
import { useParams } from "react-router-dom";
import { Flights } from "./Flights";
import { FlightsWithReturn } from "./FlightsWithReturn";

export function FlightsContainer() {
  const { iataCode, toIataCode, date, adult, child, dateReturn } =
    useParams();
  const { flyList, error, flyLoading } = useFetchFly(
    iataCode,
    toIataCode,
    date,
    adult,
    child,
    dateReturn
  );

// flyList &&
// console.log(flyList.data[0])
console.log(flyList)
  return (
    <div className="bg-black opacity-80 rounded-3xl container mx-auto flights-container">
      <div className="flights-header">Flights</div>
      {flyLoading && <h2>Loading...</h2>}
      {flyList && dateReturn == 'null' &&
        flyList.data.map((item) => <Flights data={item}/>)}
      {flyList && dateReturn !== 'null' &&
        flyList.data.map((item) => ( 
          <FlightsWithReturn data={item} />
        ))}
    </div>
  );
}
