import "../../style/Flights.css";
import useFetchFly from "./useFetchFly";
import { useParams } from "react-router-dom";
import { Flights } from "./Flights";
import { FlightsWithReturn } from "./FlightsWithReturn";

export function FlightsContainer() {
  const { iataCode, toIataCode, date, adult, child, flightReturn, dateReturn } =
    useParams();
  const { flyList, error, flyLoading } = useFetchFly(
    iataCode,
    toIataCode,
    date,
    adult,
    child,
    flightReturn,
    dateReturn
  );
  console.log(flyList);
  return (
    <div className="bg-black opacity-80 rounded-3xl container mx-auto flights-container">
      <div className="flights-header">Flights</div>
      {flyLoading && <h2>Loading...</h2>}
      {/* {!flightReturn &&
        flyList.data.map((index, item) => <Flights key={index} data={item} />)} */}
      {flightReturn &&
        flyList.data.map((index, item) => (
          <FlightsWithReturn key={index} data={item} />
        ))}
    </div>
  );
}
