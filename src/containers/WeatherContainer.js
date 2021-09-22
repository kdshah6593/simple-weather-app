import React from 'react';
import SearchForm from '../components/SearchForm'
import WeatherList from '../components/WeatherList'

const WeatherContainer = () => {
    return (
        <div>
            <p>This is a weather container</p>
            <SearchForm />
            <WeatherList />
        </div>
    )
}

export default WeatherContainer
