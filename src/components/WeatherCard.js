import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const WeatherCard = (props) => {
    
    const date = new Date(props.data.dt * 1000)

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt={props.data.weather[0].description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Data and Time: {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temperature: {props.data.main.temp}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default WeatherCard
