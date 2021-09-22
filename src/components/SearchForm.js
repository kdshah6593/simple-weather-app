import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';

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
            <form id="city-form" onSubmit={handleSubmit}>
                <label htmlFor="cityName">Search By City Name</label>
                <TextField id="cityName" variant="outlined" onChange={handleCityChange} value={searchCity} />
                <input type="submit" value="Search" />
            </form>

            <br></br>

            <form id="zip-code-form" onSubmit={handleSubmit}>
                <label htmlFor="zipCode">Search By US Zip Code</label>
                <TextField id="zipCode" variant="outlined" onChange={handleZipChange} value={searchZipCode} />
                <input type="submit" value="Search" />
            </form>

            <br></br>

            <form id="coordinates-form" onSubmit={handleSubmit}>
                <p>If you allowed browser access to current location</p>
                <input type="submit" value="Search My Location" />
            </form>
        </div>
    )
}

export default SearchForm
