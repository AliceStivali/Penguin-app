export function Card(props) {
  return (
    <div
      className="rounded-3xl w-80 h-96"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", margin: "1rem" }}
    >
      {props.children}
    </div>
  );
}
