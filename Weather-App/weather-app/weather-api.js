
// Declare const for MEtric
// Declare const for API_KEY

const API_KEY = "e1c66d0842a89387b93fcef8c1c6c002";
const UNITS_METRIC = "metric";

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


class WeatherAPI {

  constructURL(locationName){

    this.weatherURL = new URL(WEATHER_API_BASE_URL);

    this.weatherURL.searchParams.append("q", locationName);
    this.weatherURL.searchParams.append("appid", API_KEY);
    this.weatherURL.searchParams.append("units", UNITS_METRIC);

    return this.weatherURL.toString();
  }



  async invokeWeatherURL(){

    const responseObj = await fetch(this.weatherURL.toString())

    const weatherResponseJSON = await responseObj.json();

    return weatherResponseJSON;

  }


}

export {WeatherAPI}