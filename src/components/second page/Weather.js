import { useEffect, useState } from "react";
import useSWR from 'swr'

export function Weather() {
    
const city = 'Bologna'
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

console.log(data)

return ((
        weather && 
                <div className="flex justify-center items-center"><div>
                    {data && <h2 className='weather_city'><b>{`${city}`}</b></h2>} 
                <div className="flex gap-x-7 justify-center items-center">
                    {weather === 'Clear' && <img width='200px' src='./meteo/sun/6.png' alt="" /> }
                    {weather === 'Rain'  && <img width='250px' src='./meteo/cloud/7.png' alt="" />}
                    {weather === 'Fog'  && <img width='250px' src='./meteo/cloud/5.png' alt="" />}
                    {weather === 'Thunderstorm'  && <img width='150px' src='./meteo/sun/16.png' alt="" />}
                    {weather === 'Clouds' && <img width='200px' src='./meteo/cloud/32.png' alt="" />}
                    {weather === 'Mist'  && <img width='250px' src='./meteo/cloud/35.png' alt="" />}
                    {weather === 'Snow'  && <img width='250px' src='./meteo/cloud/18.png' alt="" />}
                </div>
                <div className="flex gap-x-7 justify-end ">
                    <p className='weather_temp'>{`${temp}°`}</p>
                <div style={{ color: 'white',}}>
                    <p className="weather_max"><b>{`${tempMax}°`}</b></p>
                    <p className='weather_min'> <b>{`${tempMin}°`}</b></p> 
                </div>
            </div>
        </div> 
    </div>
    ));
}
  






