import React from 'react'

const WeatherList = () => {
    
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
