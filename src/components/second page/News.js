import { useFetchNews } from "./useFetchNews";
import { useState } from "react";


export function News() {
    const { data, error, loading, articlesNumber } = useFetchNews()
     const [i, setI] = useState(0)

    function changeIndex() {
        if (i + 2 <= articlesNumber) {
          setI(i+ 2);
        }
      }

    console.log(data)
    console.log(articlesNumber)
    console.log(i)
    return (
        <div className="flex-col flex-wrap justify-center items-space-between; news-list-style">
            {loading && <h2>Caricamento...</h2>}
            {error && <h2>C'è stato un errore</h2>}

            {data && 
                        <div> 
                        <div className="news-container" key={(data.articles[i].title)}>
                            <p style={{color:'black', paddingLeft:'0.7rem', paddingTop:'1rem'}}>{data.articles[i].title}</p>
                        </div>
             </div> }    
             {data && i + 1 < articlesNumber &&
                        <div> 
                        <div className="news-container" key={(data.articles[i].title)}>
                            <p style={{color:'black', paddingLeft:'0.7rem', paddingTop:'1rem'}}>{data.articles[i + 1].title}</p>
                        </div>
             </div> }          
      
            <div>
                <button onClick={changeIndex}> switch </button>
            </div>
        </div>
    )
}
