import { CardContainer } from "./CardContainer";
import React from "react";
import "../../style/HomeSearch.css";
import { Navbar } from "../Navbar";
import { FlightsContainer } from "./FlightsContainer";
import { Footer } from "../Footer";
import { ReducedSearch } from "./ReducedSearch";

export function HomeSearch() {
  return (
    <div className="home_container">
      <Navbar />
      <ReducedSearch />
      <img
        src="../../mainHero_secondPage.jpeg"
        className="main_hero_secondPage"
        alt="fjord"
      />
      <FlightsContainer />
      <CardContainer />
      <Footer />
    </div>
  );
}
