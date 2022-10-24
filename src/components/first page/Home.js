import { OffersContainer } from "./OffersContainer";
import { Search } from "./Search";
// 

export function Home() {
    return <div className="h-screen flex flex-wrap justify-center items-center, home-background">
       
        <Search />
        <OffersContainer />
    </div>
}
