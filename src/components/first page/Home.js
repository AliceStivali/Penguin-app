import { OffersContainer } from "./OffersContainer";
import { Search } from "./Search";
import React from "react";
import "../../style/Home.css";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <img src="../../mainHero.jpeg" alt="fjord" className="main-hero" />
      <img
        src="../../main-hero-small.jpeg"
        alt="fjord-small"
        className="main-hero-smartphone"
      />
      <Search />
      <OffersContainer />
      <Footer />
    </div>
  );
}
