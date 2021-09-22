import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const WeatherCard = (props) => {
    
  //props.data[0] is date
  //props.data[1] is temp / max
  //props.data[2] is min temp
  //props.data[3] is type of weather
  //props.data[4] is description of image
  //props.data[5] is icon
  //props.data[6] is mean temp

    const date = props.data[0]
    const temp = Math.round(props.data[1])
    const minTemp = Math.round(props.data[2])
    const meanTemp = Math.round(props.data[6])

    return (
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="180"
            image={`http://openweathermap.org/img/wn/${props.data[5]}@2x.png`}
            alt={props.data[4]}
            sx={{}}
          />
          <CardContent>
            <Typography variant="h5" color="text.secondary" mt={-2}>
              {props.data[3]}
            </Typography>
            <Typography gutterBottom variant="h3" component="div" mb={-1}>
              {temp}°F
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={-1}>
              Low: {minTemp}°F
            </Typography>
            <Typography variant="h6" color="text.secondary" >
              Avg: {meanTemp}°F
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={2}>
              {date.toLocaleString('default', {weekday: 'long'})}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {date.toLocaleString('default', {month: 'long'})} {date.getDate()}, {date.getFullYear()}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default WeatherCard
