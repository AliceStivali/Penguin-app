import { CardContainer } from "./CardContainer";
import React from "react";
import "../../style/HomeSearch.css";
import { Navbar } from "../Navbar";
import { FlightsContainer } from "./FlightsContainer";
import { Footer } from "../Footer";
import { SearchContainer } from "./SearchContainer";

export function HomeSearch() {
  return (
    <div className="home_container">
      <Navbar />
      <SearchContainer />
      <img
        src="../../mainHero_secondPage.jpeg"
        className="main_hero_secondPage"
        alt="fjord"
      />
      <img
        src="../../main-hero-small.jpeg"
        alt="fjord-small"
        className="main-hero-smartphone"
      />
      <FlightsContainer />
      <CardContainer />
      <Footer />
    </div>
  );
}
