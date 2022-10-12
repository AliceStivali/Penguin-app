export function Card(props) {
  return (
    <div className="bg-black opacity-80 rounded-3xl w-80 h-96 min-w-max">
      {props.children}
    </div>
  );
}