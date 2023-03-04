import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './WeatherData.css'

const WeatherData = () => {
  let { cityName } = useParams();
  const [data, setData] = useState();
  const [celcius, setCelcius] = useState(false);
  const [fahrenheit, setFahrenheit] = useState(false);

  let apiKey = "cdb4c2a64ed44f7eb81140834230403";
  let BaseUrl = "https://api.weatherapi.com/v1/current.json?key=";
  let url = `${BaseUrl}${apiKey}&q=${cityName}.`

  useEffect(() => {
    fetch(url).then(response => response.json())
      .then((apiData) => {
        setData(apiData)
      })
  }, [url])

  const handleCelsiusChange = () => {
    setCelcius(true);
    setFahrenheit(false);
  }

  const handleFahrenheitChange = () => {
    setCelcius(false);
    setFahrenheit(true);
  }

  return (
    <div className='Weather'>
      <h1>Weather Data</h1>
      <div className='input-container'>
        <label>
          <input type="checkbox" checked={celcius} onChange={handleCelsiusChange} />
          Celsius
        </label>
        <label>
          <input type="checkbox" checked={fahrenheit} onChange={handleFahrenheitChange} />
          Fahrenheit
        </label>
      </div>
      <div className='box'>
        {celcius && data && (
          <>
            <div>Country: {data.location.country}</div>
            <div>Location: {data.location.name}</div>
            <div>Temperature: {data.current.temp_c}°C</div>
            <div>Condition: {data.current.condition.text}</div>
          </>
        )}
        {fahrenheit && data && (
          <>
            <div>Country: {data.location.country}</div>
            <div>Location: {data.location.name}</div>
            <div>Temperature: {data.current.temp_f}°F</div>
            <div>Condition: {data.current.condition.text}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default WeatherData;
