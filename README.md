# Simple Weather App

This project was created as a take home assignment for a company. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Material-UI](https://mui.com/).

## Installation
To use this app, clone this repo: `$ git clone https://github.com/kdshah6593/my-weather-app`

## Usage
After cloning, access the directory `$ cd my-weather-app` (if nested under other directories be sure to include those in the path)

The application uses the OpenWeather API, which requires an API Key. API Keys should never be shared, so follow these instructions to set up access to the API. 

First, create an account on [OpenWeather](https://home.openweathermap.org/users/sign_up) and verify your account. Once on the main page, click on your username in the top right corner, and then click on "my API keys". Create an API key if it doesn't already exist. Copy this key (can highlight, right click, "copy").

Now, you will need to create a `.env` file in the main directory. In the terminal, type `touch .env`. You should now see a `.env` file. 
Open the `.env` file, and create a variable by typing `REACT_APP_API_KEY = `. Then paste your copied API key, setting the variable equal to your API key.

After you have this set up, you can run the application.

If you have Yarn installed, you can run `yarn start`. Otherwise, you can run `npm start`. This should automatically open your browser showing the app. If not, open [http://localhost:3000](http://localhost:3000) to view it in the browser.
