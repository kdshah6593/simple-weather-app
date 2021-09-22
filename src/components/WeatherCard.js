import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const WeatherCard = (props) => {
    
    const date = new Date(props.data.dt_txt)

    const temp = Math.round(props.data.main.temp)
    const feels_like = Math.round(props.data.main.feels_like)
    // const minTemp = Math.round(props.data.main.min)
    // const maxTemp = Math.round(props.data.main.max)

    return (
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            image={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt={props.data.weather[0].description}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {temp}°F
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {props.data.weather[0].main}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Feels Like: {feels_like}°F
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Min:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Max:
            </Typography>
          </CardContent>
        </Card>
      );
}

export default WeatherCard
