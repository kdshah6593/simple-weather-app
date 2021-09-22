import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const WeatherCard = (props) => {
    

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={}
            alt={}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Data and Time: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temperature:
            </Typography>
          </CardContent>
        </Card>
      );
}

export default WeatherCard
