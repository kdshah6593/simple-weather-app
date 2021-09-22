# Simple Weather App

This is a weather application that provides the current temperature and a 5 day forecast. It was created as a take home assignment for a company. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Material-UI](https://mui.com/).

## Installation
To use this app, click `Fork` in the upper right hand corner to copy the repository to your profile. Then clone the repo: `$ git clone https://github.com/{your-username}/simple-weather-app`. If you have `SSH` set up, then you can use the `SSH path` instead of the `HTTPS path`.

## Usage
After cloning, access the directory `$ cd simple-weather-app`.

The application uses the OpenWeather API, which requires an API Key. API Keys should never be shared, so follow these instructions to set up access to the API. 

First, create an account on [OpenWeather](https://home.openweathermap.org/users/sign_up) and verify your account. Once on the main page, click on your username in the top right corner, and then click on "my API keys". Create an API key if it doesn't already exist. Copy this key (can highlight, right click, "copy").

Now, you will need to create a `.env` file in the main directory. In the terminal, type `touch .env`. You should now see a `.env` file. 
Open the `.env` file, and create a variable by typing `REACT_APP_API_KEY = `. Then paste your copied API key, setting the variable equal to your API key.

After you have this set up, you can run the application.

If you have Yarn installed, you can run `yarn start`. Otherwise, you can run `npm start`. This should automatically open your browser showing the app. If not, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

It will ask you to allow use of location so that you can use the `Forecast At My Location` Option. Otherwise you can type in a City or US Zip code to get the temperature and forecast.

## Screenshots
### Before Searching
![Alt text](https://github.com/kdshah6593/simple-weather-app/blob/main/readme_images/weather-app-before-search.png?raw=true)

### After Searching
![Alt text](https://github.com/kdshah6593/simple-weather-app/blob/main/readme_images/weather-app-after-search.png?raw=true)