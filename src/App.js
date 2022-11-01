import { Home } from "./components/first page/Home";
import { HomeSearch } from "./components/second page/HomeSearch";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="//depart=:iataCode&arrival=:toIataCode&date=:date&adult=:adult&child=:child&return=:flightReturn&dateReturn=:dateReturn"
        element={<HomeSearch />}
      ></Route>
    </Routes>
  );
}
