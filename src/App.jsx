import { useState } from "react";
import "./App.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api/api";
import Weather from "./components/current-weather/weather";
import Search from "./components/search/search";
import Forecast from "./components/current-weather/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchDate) => {
    console.log("searchdata", searchDate);
    //now splite the value inorder to search location i.e latitude and longitude
    const [lat, lon] = searchDate.value.split(" ");
    //now fetch it weather api
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // Update state with the fetched data
        setCurrentWeather({ city: searchDate.label, ...weatherResponse });
        setForecast({ city: searchDate.label, ...forecastResponse });
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  console.log("current weather", currentWeather)
  console.log("forecast", forecast)

  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-10 ">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && 
          <Weather data={currentWeather}/> // send weather data that is fetched form api to child component 
        }
        {forecast && 
          <Forecast data={forecast}/> // send forecast data that is fetched from api to child component
        }
      </div>
    </>
  );
}

export default App;
