import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import './SearchForm.css';
import Typography from '@mui/material/Typography';

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
        <div>
            <Stack direction="row" spacing={2} ml={4} mr={4} divider={<Divider orientation="vertical" flexItem />}>
                <form id="city-form" onSubmit={handleSubmit}>
                    <label className="form-item" htmlFor="cityName">Search By City Name: </label>
                    <TextField id="cityName" variant="outlined" size="small" placeholder="i.e. Chicago" onChange={handleCityChange} value={searchCity} />
                    <input className="form-item" type="submit" value="Search" />
                </form>

                <form id="zip-code-form" onSubmit={handleSubmit}>
                    <label className="form-item" htmlFor="zipCode">Search By US Zip Code: </label>
                    <TextField id="zipCode" variant="outlined" size="small" placeholder="i.e. 60606" onChange={handleZipChange} value={searchZipCode} />
                    <input className="form-item" type="submit" value="Search" />
                </form>


                <form id="coordinates-form" onSubmit={handleSubmit}>
                    <Typography className="form-item" variant="body1">
                        If Browser Allowed Access To Current Location
                    </Typography>
                    <input type="submit" value="Search Current Location" />
                </form>

            </Stack>
        </div>
    )
}

export default SearchForm
