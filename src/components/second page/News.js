import { useFetchNews } from "./useFetchNews";


export function News() {

    const { data, error, loading } = useFetchNews()
    console.log(data)
    return (
        <div className="flex-col justify-center items-space-between; news-list-style">
            {loading && <h2>Caricamento...</h2>}
            {error && <h2>C'è stato un errore</h2>}

            {data && (
                <div className="news-container">
                    <div>
                        {/* {data.articles.map((item, index) => <li key={(index)}>{item.title}</li>)} */}
                    </div>
                </div> 
            )} 
            {data && (
                <div className="news-container">

                </div>
            )}
        </div>
    )
}
