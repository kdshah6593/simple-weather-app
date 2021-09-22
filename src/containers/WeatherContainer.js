import React, {useState} from 'react';
import SearchForm from '../components/SearchForm'
import WeatherList from '../components/WeatherList'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import WeatherImage from '../images/weather-background.png';
import CurrentTemp from '../components/CurrentTemp';

const WeatherContainer = () => {
    const [weatherData, setWeatherData] = useState("")
    const [currentCity, setCurrentCity] = useState("")
    const [currentWeatherData, setCurrentWeatherData] = useState("")
    
    const currentUrl = "http://api.openweathermap.org/data/2.5/weather?"
    const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?"
    const urlEnding = `&units=imperial&appid=${process.env.REACT_APP_API_KEY}`

    const fetchByCity = (cityName) => {
        fetch(currentUrl +`q=${cityName}`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCurrentWeatherData(data);
        })
        
        fetch(baseUrl +`q=${cityName}`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCity(data)
            setWeatherData(data);
        })
    }

    const fetchByZipCode = (zipCode) => {
        fetch(currentUrl +`zip=${zipCode},us`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCurrentWeatherData(data);
        })
        
        fetch(baseUrl +`zip=${zipCode},us`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCity(data)
            setWeatherData(data);
        })
    }

    const fetchByCoordinates = (lon, lat) => {
        fetch(currentUrl +`lat=${lat}&lon=${lon}`+ urlEnding)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCurrentWeatherData(data);
        })
        
        fetch(baseUrl +`lat=${lat}&lon=${lon}`+ urlEnding)
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

    const cityText = <Typography mb={1} variant='h4' sx={{color: '#2196f3', fontWeight: 'bold'}}>{currentCity}'s 5-Day Forecast</Typography>
    
    return (
        <Container maxWidth="false" sx={{height: "100vh", backgroundColor: "#e0e0e0"}}>
            <Container fixed sx={{height: "25vh", backgroundImage: `url(${WeatherImage})`, backgroundSize: "50% auto", backgroundRepeat: "center"}}>
                <Typography variant='h2' sx={{color: '#2196f3', fontWeight: 'bold'}}>Five Day Forecast App</Typography>
                <Typography variant='h4' gutterBottom="true" sx={{color: '#2196f3'}}>Look up the forecast for the next 5 days</Typography>
            </Container>
            <SearchForm fetchByCity={fetchByCity} fetchByZipCode={fetchByZipCode} fetchByCoordinates={fetchByCoordinates} />
            {currentCity === "" ? "" : cityText}
            {currentWeatherData === "" ? "" : <CurrentTemp weatherData={currentWeatherData} />}
            <WeatherList weatherData={weatherData} />
        </Container>
    )
}

export default WeatherContainer
