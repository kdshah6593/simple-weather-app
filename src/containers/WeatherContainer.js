import React, {useState} from 'react';
import SearchForm from '../components/SearchForm'
import WeatherList from '../components/WeatherList'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const WeatherContainer = () => {
    const [weatherData, setWeatherData] = useState("")
    const [currentCity, setCurrentCity] = useState("")
    
    const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?"
    const urlEnding = `&units=imperial&appid=${process.env.REACT_APP_API_KEY}`

    const fetchByCity = (cityName) => {
        fetch(baseUrl+`q=${cityName}`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCity(data)
            setWeatherData(data);
        })
    }

    const fetchByZipCode = (zipCode) => {
        fetch(baseUrl+`zip=${zipCode},us`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCity(data)
            setWeatherData(data);
        })
    }

    const fetchByCoordinates = (lon, lat) => {
        fetch(baseUrl+`lat=${lat}&lon=${lon}`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCity(data)
            setWeatherData(data);
        })
    }

    const setCity = (data) => {
        if (data.message === "Nothing to geocode" || data.message === "city not found") {
            setCurrentCity("")
        } else {
            setCurrentCity(data.city.name)
        }
    }

    const cityText = <Typography variant='h4' sx={{color: '#2196f3', fontWeight: 'bold'}}>{currentCity}'s 5-Day Forecast</Typography>
    
    return (
        <Container maxWidth="false" sx={{height: "100vh", backgroundColor: "#e0e0e0", p: 2}}>
            <Typography variant='h2' sx={{color: '#2196f3', fontWeight: 'bold'}}>Simple Weather App</Typography>
            <Typography variant='h4' gutterBottom="true" sx={{color: '#2196f3'}}>Look up the forecast for the next 5 days</Typography>
            <SearchForm fetchByCity={fetchByCity} fetchByZipCode={fetchByZipCode} fetchByCoordinates={fetchByCoordinates} />
            {currentCity === "" ? "" : cityText}
            <WeatherList weatherData={weatherData} />
        </Container>
    )
}

export default WeatherContainer
