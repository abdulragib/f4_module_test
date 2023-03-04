import React from 'react'
import './WeatherData.css'

const WeatherData = () => {
  return (
    <div className='Weather'>
        <h1>Weather Data</h1>
        <div className='input-container'>
            <label><input type="checkbox"></input> Celcius </label>
            <label><input type="checkbox"></input> Fahrenheit</label>
        </div>
        <div className='box'> 
            <div>Location: New Delhi</div>
        </div>
    </div>
  )
}

export default WeatherData