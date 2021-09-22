import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import './SearchForm.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';

const SearchForm = (props) => {
    const [searchCity, setSearchCity] = useState("");
    const [searchZipCode, setSearchZipCode] = useState("");
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getLocation)
    })

    const getLocation = (position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
    }

    const handleCityChange = (event) => {
        setSearchCity(event.target.value);
    }

    const handleZipChange = (event) => {
        setSearchZipCode(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.id === "city-form") {
            setSearchCity("");
            props.fetchByCity(searchCity);
        } else if (event.target.id === "zip-code-form") {
            setSearchZipCode("");
            props.fetchByZipCode(searchZipCode)
        } else if (event.target.id === "coordinates-form") {
            console.log(longitude)
            console.log(latitude)
            props.fetchByCoordinates(longitude, latitude)
        }
    }
        
    return (
        <Container maxWidth="false" sx={{justifyContent:"center", pt: 3, pb: 3}}>
            <Stack direction="row" spacing={2} ml={4} mr={4} divider={<Divider orientation="vertical" flexItem />}>
                <form id="city-form" onSubmit={handleSubmit}>
                    <label className="form-item" htmlFor="cityName">Search By City Name: </label>
                    <TextField required id="cityName" variant="outlined" size="small" color="primary" placeholder="i.e. Chicago" onChange={handleCityChange} value={searchCity} sx={{background: "white", borderRadius: 1}}/>
                    <Button variant="contained" type="submit" color="primary" sx={{ml: 2}}>Check Forecast</Button>
                </form>

                <form id="zip-code-form" onSubmit={handleSubmit}>
                    <label className="form-item" htmlFor="zipCode">Search By US Zip Code: </label>
                    <TextField required id="zipCode" variant="outlined" size="small" color="primary" placeholder="i.e. 60606" onChange={handleZipChange} value={searchZipCode} sx={{background: "white", borderRadius: 1}} />
                    <Button variant="contained" type="submit" color="primary" sx={{ml: 2}}>Check Forecast</Button>
                </form>


                <form id="coordinates-form" onSubmit={handleSubmit}>
                    <Button variant="contained" type="submit" color="primary" sx={{mr: 2}}>Forecast At Current Location</Button>
                    <FormHelperText className="form-item" sx={{color: '#2196f3'}}>
                        (If Browser Allowed Access To Current Location)
                    </FormHelperText>
                </form>

            </Stack>
        </Container>
    )
}

export default SearchForm
