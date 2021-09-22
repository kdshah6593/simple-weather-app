import React from 'react'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const CurrentTemp = (props) => {
    console.log(props.weatherData)
    
    return (
        <Container>
            <Paper sx={{width: '50%', marginLeft:"25%", marginRight:"25%", display:"flex", flexDirection:"row", alignItems:"center"}}>
                <Typography variant="h5" color="text.secondary" ml={1}>
                    Currently: 
                </Typography>
                <Container sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}} >
                    <img
                        src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
                        alt={props.weatherData.weather[0].description}
                    />
                    <Typography variant="h5" color="text.secondary">
                        {props.weatherData.weather[0].main}
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                        {Math.round(props.weatherData.main.temp)}°F
                    </Typography>
                </Container>
            </Paper>
        </Container>
    )
}

export default CurrentTemp
