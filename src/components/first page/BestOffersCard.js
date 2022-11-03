export function BestOffersCard(props) {
  return (
    <div
      className="bg-black opacity-80 rounded-3xl w-72 h-52"
      style={{ margin: "1rem" }}
    >
      {props.children}
    </div>
  );
}
