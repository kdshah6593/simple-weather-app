import React from 'react'
import WeatherCard from './WeatherCard';

const WeatherList = (props) => {
    
    const forecast = props.weatherData.list.map(dataPoint => (
        <WeatherCard data={dataPoint} />
    ))
    
    return (
        <div>
            <p>And it will hold the weather cards</p>
            {forecast}
        </div>
    )
}

export default WeatherList
