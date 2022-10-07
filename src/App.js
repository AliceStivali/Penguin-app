// import { Routes,Route } from "react-router-dom";
import InputAirport from "./components/InputAirport";
import ShowDestination from "./components/ShowDestination";
import { Route, Routes } from "react-router-dom";
import ShowFly from "./components/ShowFly";
import SearchFly from "./components/SearchFly";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<InputAirport />}>
                <Route path=":iataCode" element={<ShowDestination />}>
                    <Route path=":toIataCode" element={<ShowFly />} />
                </Route>
            </Route>
            <Route path="/search" element={<SearchFly />}></Route>
        </Routes>
    );
};

export default App;

