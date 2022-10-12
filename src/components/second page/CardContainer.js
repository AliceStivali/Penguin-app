import { Card } from "./Card";
import { Weather } from "./Weather";

export function CardContainer() {
  return (
    <div className="md:flex flex-nowrap gap-x-7 justify-center items-center">
      <Card>
        <Weather />
      </Card>
      <Card />
      <Card />
    </div>
  );
}
