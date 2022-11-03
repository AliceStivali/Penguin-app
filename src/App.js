import { Home } from "./components/first page/Home";
import { HomeSearch } from "./components/second page/HomeSearch";
import AboutUs from "./components/AboutUs";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="//depart=:iataCode&arrival=:toIataCode&date=:date&adult=:adult&child=:child&cityarrival=:cityarrival&dateReturn=:dateReturn"
        element={<HomeSearch />}
      ></Route>
      <Route path="/about" element={<AboutUs />}></Route>
    </Routes>
  );
}
