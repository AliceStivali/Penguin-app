import { BestOffersCard } from "./BestOffersCard";

export function OffersContainer() {
    return <div className="h-2/4 flex flex-nowrap gap-x-7 justify-center items-center">
        <BestOffersCard />
        <BestOffersCard />
        <BestOffersCard />
    </div>
}