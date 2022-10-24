import { Card } from "./Card";
import { TouristInfo } from "./TouristInfo";
import { Weather } from "./Weather";
import { News } from "./News";

export function CardContainer() {
 return <div className="flex flex-nowrap gap-x-7 justify-center items-center">
        <Card>
            <Weather />
        </Card>
        <Card>
            <News />
        </Card>
      <Card>
        <TouristInfo />
      </Card>
  </div>
}
