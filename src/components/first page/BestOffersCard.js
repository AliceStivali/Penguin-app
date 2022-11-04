import "../../style/OffersContainer.css";

export function BestOffersCard(props) {
  return (
    <div
      className="rounded-3xl w-72 h-52 best-offers-card"
      style={{ margin: "1rem" }}
    >
      {props.children}
    </div>
  );
}
