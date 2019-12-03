import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import './style.css';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  FOG
} from "../../constants/weathers";

const data = {
  temperature: 5,
  weatherState: RAIN,
  humidity: 10,
  wind: '10 m/s'
}

// arrow function
const WeatherLocation = () => (
  <div className="weatherLocationCont">
    <Location city="Huelva"/>
    <WeatherData data={data}/>
  </div>
);

export default WeatherLocation;
