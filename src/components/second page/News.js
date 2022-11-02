import { useFetchNews } from "./useFetchNews";
import { useState } from "react";
import "../../style/News.css";


export function News() {
    const { data, error, loading, articlesNumber } = useFetchNews()
     const [i, setI] = useState(0)

    function changeIndexForward() {
        if (i + 2 <= articlesNumber) {
          setI(i+ 2);
        }
      }

    function changeIndexBackwards() {
        if(i !== 0) {
            setI(i - 1)
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
                            <p style={{paddingLeft: '5rem', paddingTop: '0.7rem'}}>What's new in {data.user_input.q}</p>
                        <div className="news-container" key={(data.articles[i].title)}>
                            <p style={{color:'black', paddingLeft:'0.5rem', paddingTop:'0.5rem'}}>{data.articles[i].title}</p>
                        </div>
             </div> }    
             {data && i + 1 < articlesNumber &&
                        <div> 
                        <div className="news-container" key={(data.articles[i].title)}>
                            <p style={{color:'black', paddingLeft:'0.5rem', paddingTop:'0.5rem'}}>{data.articles[i + 1].title}</p>
                        </div>
             </div> }          
            
            <div className="news-card-buttons">
            <div className="news-arrow-btn-container">
                {i !== 0 && (
                        <button className="arrow-button" onClick={changeIndexBackwards}> ◀ </button>
                    )}
                    <button className="arrow-button" onClick={changeIndexForward}> ▶ </button>
                    
            </div>
            </div>
       </div> 
    )
}