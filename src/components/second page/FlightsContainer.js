import "../../style/Flights.css";
import useFetchFly from "./useFetchFly";
import { useParams } from "react-router-dom";
import { Flights } from "./Flights";
import { FlightsWithReturn } from "./FlightsWithReturn";

export function FlightsContainer() {
  const { iataCode, toIataCode, date, adult, child, dateReturn } = useParams();
  const { flyList, error, flyLoading } = useFetchFly(
    iataCode,
    toIataCode,
    date,
    adult,
    child,
    dateReturn
  );

  console.log(flyList);
  return (
    <div className="rounded-3xl container mx-auto flights-container">
      <div className="flights-header">Flights</div>
      {flyLoading && <h2>Loading...</h2>}
      {flyList &&
        dateReturn == "null" &&
        flyList.data.map((item, index) => <Flights data={item} key={index} />)}
      {flyList &&
        dateReturn !== "null" &&
        flyList.data.map((item, index) => (
          <FlightsWithReturn data={item} key={index} />
        ))}
      {flyList && flyList.meta.count === 0 && (
        <h1 style={{ color: "white" }}>No flights available!</h1>
      )}
    </div>
  );
}
