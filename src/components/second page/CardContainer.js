import { Card } from "./Card";

export function CardContainer() {
    return <div className="flex flex-nowrap gap-x-7 justify-center items-center">
        <Card />
        <Card />
        <Card />
    </div>
}