
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import axios from "axios"

function App() {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  
  const [city,setCity]= useState("");
  const [weatherData, setWeatherData]= useState([])
  const apiURL= `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`


const handleSearch= ()=>{

  axios.get(apiURL)
  .then(res=> setWeatherData(res.data.current))
  .catch(err=> console.log(err))
}
  

  return (
    <>
      <div>
        <input type="text" placeholder='Enter your city' value={city} onChange={(e)=>setCity(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <Cards title="Temperature" value={weatherData?.temp_c || "--"}/>
        <Cards title="Humidity" value={weatherData?.humidity || "--"} />
        <Cards title="Condition" value={weatherData.condition?.text || "--"}/>
        <Cards title="Wind Speed" value={weatherData?.wind_kph || "--"}/>
      </div>
    </>
  )
}

export default App
