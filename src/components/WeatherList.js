import React from 'react'
import WeatherCard from './WeatherCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const WeatherList = (props) => {
    
    const forecast = () => {
        if (props.weatherData === "") {
            return(<p>No location currently</p>)
        } else {
            const weatherPoints = [];
            for (let i = 0; i < props.weatherData.list.length; i += 8) {
                weatherPoints.push(props.weatherData.list[i])
            }
            
            const weatherCards1 = weatherPoints.map(dataPoint => (
                <Grid item xs={2}>
                    <WeatherCard data={dataPoint} />
                </Grid>
            ))
            
            const weatherCards = props.weatherData.list.map(dataPoint => (
                <WeatherCard data={dataPoint} />
            ))
            return weatherCards1
        }
    }
    
    return (
        <Box sx={{flexGrow: 1, mt: 5}}>
            <Grid container sx={{justifyContent: 'center'}}>
                {forecast()}
            </Grid>
        </Box>
    )
}

export default WeatherList
