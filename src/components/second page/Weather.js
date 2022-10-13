import { useEffect, useState } from "react";
import useSWR from 'swr'

export function Weather() {
    
const city = 'Roma'
const api = 'fd8dfe68dddae8242051d12f28167f50';
const fetcher = (url) => fetch(url).then(res=> res.json()) 
const {data, error} = useSWR( `https://api.openweathermap.org/data/2.5/weather?q=
${city}&units=metric&appid=
${api}`, fetcher)
error && console.error('Error');

const [weather, setWeather] = useState('')
const [tempMin, setTempMin] = useState('')
const [tempMax, setTempMax] = useState('')
const [temp, setTemp] = useState('')

useEffect(() => {
    if (data) {
    setWeather(data.weather[0].main)
    setTempMin(Number.parseFloat(data.main.temp_min).toFixed(1))
    setTempMax(Number.parseFloat(data.main.temp_max).toFixed(1))
    setTemp(Number.parseFloat(data.main.temp).toFixed(1))
}
}, [data]) 


return ((
        weather && 
                <div className="flex justify-center items-center"><div>
                    {data && <h2 style={{marginTop:'2rem',marginBottom:'0.2rem',color: 'white', fontSize: '2rem', textAlign: 'center'}}>{`${city}`}</h2>} 
                <div className="flex gap-x-7 justify-center items-center">
                    {weather === 'Clear' && <img width='250px' src='./meteo/sun/6.png' alt="" /> }
                    {weather === 'Rain'  && <img width='200px' src='./meteo/cloud/7.png' alt="" />}
                    {weather === 'Thunderstorm'  && <img width='150px' src='./meteo/sun/16.png' alt="" />}
                    {weather === 'Clouds' && <img width='250px' src='./meteo/cloud/35.png' alt="" />}
                    {weather === 'Mist'  && <img width='250px' src='./meteo/cloud/35.png' alt="" />}
                    {weather === 'Snow'  && <img width='250px' src='./meteo/cloud/18.png' alt="" />}
                </div>
                <div className="flex gap-x-7 justify-end ">
                    <p style={{ color: 'white', marginRight:'3rem', fontSize:'3rem'}}>{`${temp}°`}</p>
                <div style={{ color: 'white',}}>
                    <p style={{ color: '#9A2A2A',fontSize: '1.3rem'}}><b>{`${tempMax}°`}</b></p>
                    <p style={{ color: '#99CCCC'}}>{`${tempMin}°`}</p> 
                </div>
            </div>
        </div> 
    </div>
    ));
}
  






