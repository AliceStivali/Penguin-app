import { BestOffersCard } from "./BestOffersCard";
import "../../style/OffersContainer.css";

export function OffersContainer() {
  return (
    <div
      className="h-2/4 flex gap-x-7 justify-center items-center"
      style={{ flexWrap: "wrap" }}
    >
      <BestOffersCard>
        <p className="first_page_cards">
          <strong>Madrid</strong>
        </p>
        <div className="container_first_card">
          <div className="price_card_container">
            <p className="discount_card">-27%</p>
            <p className="price_card">
              {" "}
              <span>€</span>48.<span>80</span>{" "}
            </p>
            <p className="date_card">3 Nov - 5 Nov</p>
          </div>
          <img className="main_card_pic" src="madrid.jpg" alt="" />
        </div>
      </BestOffersCard>

      <BestOffersCard>
        <p className="first_page_cards">
          <strong>Paris</strong>
        </p>
        <div className="container_first_card">
          <div className="price_card_container">
            <p className="discount_card">-15%</p>
            <p className="price_card">
              {" "}
              <span>€</span>87.<span>80</span>{" "}
            </p>
            <p className="date_card">15 Nov - 30 Nov</p>
          </div>
          <img className="main_card_pic" src="paris.jpg" alt="" />
        </div>
      </BestOffersCard>

      <BestOffersCard>
        <p className="first_page_cards">
          <strong>Cagliari</strong>
        </p>
        <div className="container_first_card">
          <div className="price_card_container">
            <p className="discount_card">-31%</p>
            <p className="price_card">
              {" "}
              <span>€</span>38.<span>50</span>{" "}
            </p>
            <p className="date_card">6 Dec - 20 Dec</p>
          </div>
          <img className="main_card_pic" src="cagliari.jpeg" alt="" />
        </div>
      </BestOffersCard>
    </div>
  );
}
