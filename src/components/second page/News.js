import { useFetchNews } from "./useFetchNews";


export function News() {

    const { data, error, loading } = useFetchNews()
    console.log(data)
    return (
        <div>
            {loading && <h2>Caricamento...</h2>}
            {error && <h2>C'è stato un errore</h2>}
            {data && data.articles.map((item, index) => <li key={(index)}>{item.title}</li>)}
        </div>
    )
}
