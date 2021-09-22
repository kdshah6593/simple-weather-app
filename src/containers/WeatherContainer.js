import React, {useState} from 'react';
import SearchForm from '../components/SearchForm'
import WeatherList from '../components/WeatherList'

const WeatherContainer = () => {
    const [weatherData, setWeatherData] = useState("")
    
    const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?"
    const urlEnding = `&appid=${process.env.REACT_APP_API_KEY}`

    const fetchByCity = (cityName) => {
        fetch(baseUrl+`q=${cityName}`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setWeatherData(data);
        })
    }

    const fetchByZipCode = (zipCode) => {
        fetch(baseUrl+`zip=${zipCode},us`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setWeatherData(data);
        })
    }

    const fetchByCoordinates = (lat, lon) => {
        fetch(baseUrl+`lat=${lat}&lon=${lon}`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setWeatherData(data);
        })
    }
    
    return (
        <div>
            <p>This is a weather container</p>
            <SearchForm fetchByCity={fetchByCity} fetchByZipCode={fetchByZipCode} fetchByCoordinates={fetchByCoordinates} />
            <WeatherList weatherData={weatherData} />
        </div>
    )
}

export default WeatherContainer
