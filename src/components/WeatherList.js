import React from 'react'
import WeatherCard from './WeatherCard';

const WeatherList = (props) => {
    
    const forecast = () => {
        if (props.weatherData === "") {
            return(<p>No location currently</p>)
        } else {
            const weatherCards = props.weatherData.list.map(dataPoint => (
                <WeatherCard data={dataPoint} />
            ))
            return weatherCards
        }
    }
    
    return (
        <div>
            <p>The Weather Cards are listed below</p>
            {forecast()}
        </div>
    )
}

export default WeatherList
