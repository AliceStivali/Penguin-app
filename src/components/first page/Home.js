import { OffersContainer } from "./OffersContainer";
import { Search } from "./Search";
import React from "react";
import "../../style/Home.css";
import { Footer } from "./Footer";


export function Home() {
    return (
    <div className="home_container">        
        <img src="../../mainHero.jpeg" className="main_hero"/>
         {/* <Search />
        <OffersContainer />  */}
        <Footer />
    </div>
    )
}
