import React from 'react'
import WeatherCard from './WeatherCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const WeatherList = (props) => {
    
    const sortDays = (list) => {
        let days = [];

        for(let i = 0; i < list.length; i+=8) {
            let temp = [];
            temp.push(new Date(list[i+6].dt_txt));
            const maxTemp = findMax(list, i);
            const minTemp = findMin(list, i);
            const meanTemp = findMean(list, i);
            temp.push(maxTemp);
            temp.push(minTemp);
            temp.push(list[i].weather[0].main)
            temp.push(list[i].weather[0].description);
            temp.push(list[i].weather[0].icon);
            temp.push(meanTemp);
            days.push(temp)
        }

        return days
    }

    const findMax = (weatherList, start) => {
        let max = 0;
        for (let i = start; i < start+8; i++) {
            max = Math.max(max, weatherList[i].main.temp)
        }
        return max
    }

    const findMin = (weatherList, start) => {
        let min = weatherList[start].main.temp;
        for (let i = start+1; i < start+8; i++) {
            min = Math.min(min, weatherList[i].main.temp)
        }
        return min
    }

    const findMean = (weatherList, start) => {
        let sum = 0;
        let denominator = 0
        for (let i = start+1; i < start+8; i++) {
            sum += weatherList[i].main.temp
            denominator++
        }
        return (sum / denominator)
    }

    const forecast = () => {
        if (props.weatherData === "") {
            return (
                <Typography variant='h4' sx={{color: '#2196f3', fontWeight: 'bold'}}>Choose a Location!</Typography>
            )
        } else if (props.weatherData.message === 'city not found') {
            return (
                <Typography variant='h4' sx={{color: '#2196f3', fontWeight: 'bold'}}>Sorry, that city can't be found. Try again!</Typography>
            )
        } else {
            const days = sortDays(props.weatherData.list)
            const weatherCards = days.map(data => (
                <Grid item xs={2}>
                    <WeatherCard data={data} />
                </Grid>
            ))
            return weatherCards
        }
    }
    
    return (
        <Box sx={{flexGrow: 1, mt: 5}}>
            <Grid container spacing={2} sx={{justifyContent: 'center'}}>
                {forecast()}
            </Grid>
        </Box>
    )
}

export default WeatherList
